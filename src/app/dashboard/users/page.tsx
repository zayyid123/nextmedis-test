"use client";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { UserTypes } from "@/types/UserTypes";
import { getAllUserServices } from "@/services/userServices";
import { UserDataTable } from "./_components/data-table";
import { UserColumns } from "./_components/columns";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

export default function Page() {
  const [currentPage] = useQueryState(
    "page",
    parseAsString.withOptions({ shallow: false }).withDefault("1")
  );
  const [users, setUsers] = useState<UserTypes[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllUserServices(currentPage);
      setTotalUsers(response.data.total);
      setUsers(response.data.data);
    }
    fetchData();
  }, [currentPage]);

  return (
    <div className="p-5 min-h-full">
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Users</h2>
            <p className="text-sm text-muted-foreground">Manage Users</p>
          </div>
          <Link
            href="/dashboard/users/add"
            className={cn(buttonVariants(), "text-xs md:text-sm")}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <UserDataTable
          columns={UserColumns}
          data={users}
          totalItems={totalUsers}
        />
      </div>
    </div>
  );
}
