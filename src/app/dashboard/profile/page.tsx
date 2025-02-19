"use client";
import { AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserTypes } from "@/types/UserTypes";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React, { useEffect, useState } from "react";

const PageProfile = () => {
  const [userLoggedInProfileData, setuserLoggedInProfileData] =
    useState<UserTypes>();

  useEffect(() => {
    const getDataUserLoggedInFromLocalStorage = async () => {
      const userLoggedIn = localStorage.getItem("DATA_USER");
      if (userLoggedIn) {
        setuserLoggedInProfileData(JSON.parse(userLoggedIn));
      }
    };
    getDataUserLoggedInFromLocalStorage();
  }, []);

  return (
    <div className="bg-slate-100 p-5 min-h-full">
      {/* user info */}
      <Card className="w-full max-w-[500px]">
        <CardHeader className="flex justify-between items-center">
          <div>
            <Avatar>
              <AvatarImage
                src={`${userLoggedInProfileData?.avatar}`}
                alt={
                  userLoggedInProfileData?.first_name +
                  " " +
                  userLoggedInProfileData?.last_name
                }
                className="h-28 w-2h-28 rounded-lg"
              />
              <AvatarFallback className="rounded-lg bg">
                {userLoggedInProfileData?.first_name +
                  " " +
                  userLoggedInProfileData?.last_name}
              </AvatarFallback>
            </Avatar>
          </div>
        </CardHeader>
        <CardContent >
          <div className="flex gap-x-3">
            <p className="font-bold text-base" >First Name:</p>
            <p className="font-light">{userLoggedInProfileData?.first_name}</p>
          </div>

          <div className="mt-1 flex gap-x-3">
            <p className="font-bold text-base" >Last Name:</p>
            <p className="font-light">{userLoggedInProfileData?.last_name}</p>
          </div>

          <div className="mt-1 flex gap-x-3">
            <p className="font-bold text-base" >Email:</p>
            <p className="font-light">{userLoggedInProfileData?.email}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageProfile;
