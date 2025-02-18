"use client";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { EyeClosed, EyeIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerServices } from "@/services/authServices";
import { handleError } from "@/utils/errorHandler";
import { getDetailUsersServices } from "@/services/userServices";

const schema = z.object({
  email: z.string().email({ message: "Your email is invalid." }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long." }),
});
const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "zay@gmail.com",
      password: "password",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    startTransition(async () => {
      try {
        const response = await registerServices(data);
        document.cookie = `token=${response.data.token}; path=/; max-age=3600;`;

        // get data user
        const id = response.data.token.slice(-1);
        const responseUser = await getDetailUsersServices(id);

        // save locale storage
        localStorage.setItem(
          "DATA_USER",
          JSON.stringify(responseUser.data.data)
        );

        toast.success("Successfully logged in");
        router.push("/dashboard");
      } catch (err) {
        handleError(err);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 2xl:mt-7 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className=" font-medium text-default-600">
          Email{" "}
        </Label>
        <Input
          size={20}
          disabled={isPending}
          {...register("email")}
          type="email"
          id="email"
          className={cn("", {
            "border-destructive ": errors.email,
          })}
        />
      </div>
      {errors.email && (
        <div className=" text-destructive mt-2 text-sm">
          {errors.email.message}
        </div>
      )}

      <div className="mt-3.5 space-y-2 pb-6">
        <Label htmlFor="password" className="mb-2 font-medium text-default-600">
          Password{" "}
        </Label>
        <div className="relative">
          <Input
            size={20}
            disabled={isPending}
            {...register("password")}
            type={passwordType}
            id="password"
            className="peer  "
            placeholder=" "
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
            onClick={togglePasswordType}
          >
            {passwordType === "password" ? <EyeIcon /> : <EyeClosed />}
          </div>
        </div>
      </div>
      {errors.password && (
        <div className=" text-destructive mt-2 text-sm">
          {errors.password.message}
        </div>
      )}

      <Button disabled={isPending} type="submit" className="w-full">
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Loading..." : "Sign Up"}
      </Button>
    </form>
  );
};
export default RegisterForm;
