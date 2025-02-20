"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  editResourcesServices,
  getDetailResourceServices,
} from "@/services/resourceServices";
import { handleError } from "@/utils/errorHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Name must be filled.",
    })
    .min(1, "Name cannot be empty."),
  year: z
    .number({
      required_error: "Year must be filled.",
    })
    .min(1, "Year cannot be empty."),
  color: z
    .string({
      required_error: "Color must be filled.",
    })
    .min(1, "Color cannot be empty."),
  pantone_value: z
    .string({
      required_error: "Pantone Value must be filled.",
    })
    .min(1, "Pantone Value cannot be empty."),
});

const PageAddResource = () => {
  const { id } = useParams();
  const router = useRouter();
  const [defaultValues] = useState({
    name: "",
    year: 1960,
    color: "",
    pantone_value: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await editResourcesServices(id as string, data);

      toast.success("Data successfully added", { duration: 1000 });
      router.back();
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const getDetailDataResource = async () => {
      const response = await getDetailResourceServices(id as string);
      const dataResource = response.data.data;
      form.reset({
        name: dataResource.name,
        year: dataResource.year,
        color: dataResource.color,
        pantone_value: dataResource.pantone_value,
      });
    };
    getDetailDataResource();
  }, []);

  return (
    <div className="p-5 min-h-full">
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Add Resources</h2>
            <p className="text-sm text-muted-foreground">
              Fill data and submit new resources
            </p>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* input name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Year"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        min={1960}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* input color */}
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Color</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Color" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* input pantone_value */}
              <FormField
                control={form.control}
                name="pantone_value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pantone Value</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Pantone Value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PageAddResource;
