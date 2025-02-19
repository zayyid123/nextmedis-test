"use client";

import { UserTypes } from "@/types/UserTypes";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./cell-action";

export const UserColumns: ColumnDef<UserTypes>[] = [
  {
    accessorKey: "id",
    header: "ID",
    enableHiding: false,
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    enableHiding: true,
    cell: (row) => (
      <Image
        src={row.row.original.avatar}
        alt={`${row.row.original.first_name} ${row.row.original.last_name}`}
        className="h-8 w-8 rounded-full"
        width={50}
        height={50}
      />
    ),
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    enableHiding: false,
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    enableHiding: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (row) => (
      <span
        title={row.row.original.email}
        className="inline-block lg:max-w-none max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {row.row.original.email}
      </span>
    ),
    enableHiding: false,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
