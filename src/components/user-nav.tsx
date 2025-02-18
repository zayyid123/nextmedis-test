"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserTypes } from "@/types/UserTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function UserNav() {
  const router = useRouter();
  const [userData, setuserData] = useState<UserTypes>({
    avatar: "",
    email: "",
    first_name: "",
    id: 0,
    last_name: "",
  });

  useEffect(() => {
    const getUserSignIn = async () => {
      const userDataLocal = localStorage.getItem("DATA_USER");
      if (userDataLocal) {
        setuserData(JSON.parse(userDataLocal));
      }
    };
    getUserSignIn();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={`https://ui-avatars.com/api/?name=${
                userData.first_name + " " + userData.last_name
              }`}
              alt={userData.first_name + " " + userData.last_name}
            />
            <AvatarFallback className="rounded-lg bg">
              {userData.first_name + " " + userData.last_name}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {userData.first_name + " " + userData.last_name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userData.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              router.push("/dashboard/profile");
            }}
          >
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            document.cookie =
              "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            localStorage.removeItem("DATA_USER");
            router.push("/auth/login");
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
