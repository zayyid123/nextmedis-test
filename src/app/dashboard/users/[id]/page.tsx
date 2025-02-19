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
  editUsersServices,
  getDetailUsersServices,
} from "@/services/userServices";
import { handleError } from "@/utils/errorHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  first_name: z
    .string({
      required_error: "First Name must be filled.",
    })
    .min(1, "First Name cannot be empty."),
  last_name: z
    .string({
      required_error: "Last Name must be filled.",
    })
    .min(1, "Last Name cannot be empty."),
  email: z.string().email({ message: "Your email is invalid." }),
});

const PageEditUser = () => {
  const { id } = useParams();
  const router = useRouter();
  const [defaultValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await editUsersServices(id as string, data);

      toast.success("Data successfully edited", { duration: 1000 });
      router.back();
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const getDetailDataUser = async () => {
      const response = await getDetailUsersServices(id as string);
      const dataUser = response.data.data;
      form.reset({
        first_name: dataUser.first_name,
        last_name: dataUser.last_name,
        email: dataUser.email,
      });
    };
    getDetailDataUser();
  }, []);

  return (
    <div className="p-5 min-h-full">
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Edit User</h2>
            <p className="text-sm text-muted-foreground">
              Edit data and submit edited user
            </p>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* input first_name */}
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* input last_name */}
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* input email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
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

export default PageEditUser;
