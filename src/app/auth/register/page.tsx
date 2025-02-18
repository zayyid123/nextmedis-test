import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <div className="lg:block hidden flex-1 overflow-hidden text-[40px] leading-[48px] text-default-600 relative z-[1] bg-gray-200">
          <div className="max-w-[520px] pt-20 ps-20 ">
            <h4>
              Register with
              <span className="text-5xl font-bold ms-2">Nextmedis</span>
            </h4>
          </div>
          <div className="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
            <Image
              src="/images/auth/bg_regist.png"
              alt=""
              width={900}
              height={900}
              className="mb-10 w-full h-full max-h-[800px] max-w-[800px]"
            />
          </div>
        </div>
        <div className="flex-1 relative">
          <div className=" h-full flex flex-col  dark:bg-default-100 bg-white">
            <div className="max-w-[524px] md:px-[42px] md:py-[44px] p-7  mx-auto w-full text-2xl text-default-900  mb-3 h-full flex flex-col justify-center">
              <div className="flex justify-center items-center text-center mb-6 lg:hidden ">
                <div className="text-5xl font-bold ms-2">Nextmedis</div>
              </div>
              <div className="text-center 2xl:mb-10 mb-4">
                <h4 className="font-medium">Sign up</h4>
                <div className="text-default-500 text-base">
                  Sign up to make new account to start
                </div>
              </div>

              {/* form */}
              <RegisterForm />

              <div className="md:max-w-[345px] mx-auto font-normal text-default-500 mt-12 text-sm">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-default-900  font-medium hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
