"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { ResourceTypes } from "@/types/ResourceTypes";

export const ResourceColumns: ColumnDef<ResourceTypes>[] = [
  {
    accessorKey: "id",
    header: "ID",
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    enableHiding: false,
  },
  {
    accessorKey: "year",
    header: "Year",
    enableHiding: true,
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: (row) => (
      <div
        className="w-8 h-8 rounded-full"
        style={{ backgroundColor: row.row.original.color }}
      ></div>
    ),
    enableHiding: false,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
