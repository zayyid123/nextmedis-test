"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllResourcesServices } from "@/services/resourceServices";
import { getAllUserServices } from "@/services/userServices";
import { Files, User } from "lucide-react";
import React, { useEffect, useState } from "react";

const PageDasboard = () => {
  const [userTotal, setuersTotal] = useState(0);
  const [resourceTotal, setresourceTotal] = useState(0);

  useEffect(() => {
    const getAllDataDashboard = async () => {
      // Get all user
      const responseUsers = await getAllUserServices();
      setuersTotal(responseUsers.data.total);

      // Get all resources
      const responseResources = await getAllResourcesServices();
      setresourceTotal(responseResources.data.total);
    };
    getAllDataDashboard();
  }, []);

  return (
    <div className="bg-slate-100 p-5 min-h-full">
      <div className="flex justify-start items-center gap-4 flex-wrap">
        <Card className="lg:w-1/3 w-[100%]">
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center gap-4">
            <div className="bg-muted p-2 rounded-full">
              <User />
            </div>
            <div>
              <p className="font-bold text-3xl text-blue-500">{userTotal}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:w-1/3 w-[100%]">
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center gap-4">
            <div className="bg-muted p-2 rounded-full">
              <Files />
            </div>
            <div>
              <p className="font-bold text-3xl text-green-400">
                {resourceTotal}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PageDasboard;
