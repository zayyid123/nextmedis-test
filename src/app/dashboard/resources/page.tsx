"use client";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { UserDataTable } from "./_components/data-table";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { ResourceColumns } from "./_components/columns";
import { getAllResourcesServices } from "@/services/resourceServices";
import { ResourceTypes } from "@/types/ResourceTypes";

export default function Page() {
  const [currentPage] = useQueryState(
    "page",
    parseAsString.withOptions({ shallow: false }).withDefault("1")
  );
  const [resources, setresources] = useState<ResourceTypes[]>([]);
  const [totalResources, setTotalResources] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllResourcesServices(currentPage);
      setTotalResources(response.data.total);
      setresources(response.data.data);
    }
    fetchData();
  }, [currentPage]);

  return (
    <div className="p-5 min-h-full">
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
            <p className="text-sm text-muted-foreground">Manage Resources</p>
          </div>
          <Link
            href="/dashboard/resources/add"
            className={cn(buttonVariants(), "text-xs md:text-sm")}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <UserDataTable
          columns={ResourceColumns}
          data={resources}
          totalItems={totalResources}
        />
      </div>
    </div>
  );
}
