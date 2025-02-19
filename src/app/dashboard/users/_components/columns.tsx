"use client";

import { UserTypes } from "@/types/UserTypes";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./cell-action";

export const UserColumns: ColumnDef<UserTypes>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
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
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    enableHiding: true,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
