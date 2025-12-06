"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export type JoinFormResponses = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const columns: ColumnDef<JoinFormResponses>[] = [
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return (
        <Link
          href={`mailto:${row.getValue("email")}`}
          className="text-blue-500"
        >
          {row.getValue("email")}
        </Link>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <span className="whitespace-nowrap">{row.getValue("name")}</span>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      return <span className="whitespace-nowrap">{row.getValue("phone")}</span>;
    },
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt")).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

      return <span className="whitespace-nowrap">{date}</span>;
    },
  },
];
