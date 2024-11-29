"use client";

import * as React from "react";
import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    education: "BS Computer Science",
    cnic: "12345-6789012-3",
    email: "john.doe@example.com",
    profilePicture: "profile.jpg",
    address: "123 Main St",
    gender: "Male",
    role: "trainer",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    education: "MSc Mathematics",
    cnic: "23456-7890123-4",
    email: "jane.smith@example.com",
    profilePicture: "profile.jpg",
    address: "456 Park Ave",
    gender: "Female",
    role: "student",
  },
  {
    id: "m5gr84i9",
    firstName: "Ahmed",
    lastName: "Khan",
    education: "Web Development",
    email: "ahmed99@yahoo.com",
    cnic: "42401-5478332-5",
    address: "123 Main St",
    gender: "Male",
    role: "trainer",
  },
  {
    id: "m5gr84i10",
    firstName: "Sara",
    lastName: "Ali",
    education: "Graphic Design",
    email: "sara_ali@gmail.com",
    cnic: "42401-8472331-2",
    address: "456 Elm St",
    gender: "Female",
    role: "trainer",
  },
  {
    id: "m5gr84i11",
    firstName: "Usman",
    lastName: "Sheikh",
    education: "Data Science",
    email: "usman_sheikh@gmail.com",
    cnic: "42401-6578333-6",
    address: "789 Maple Ave",
    gender: "Male",
    role: "trainer",
  },
  {
    id: "m5gr84i12",
    firstName: "Zainab",
    lastName: "Hussain",
    education: "App Development",
    email: "zainab_hussain@yahoo.com",
    cnic: "42401-3278334-9",
    address: "321 Oak St",
    gender: "Female",
    role: "trainer",
  },
  {
    id: "m5gr84i13",
    firstName: "Bilal",
    lastName: "Malik",
    education: "Cybersecurity",
    email: "bilal_malik@hotmail.com",
    cnic: "42401-1378335-7",
    address: "654 Pine St",
    gender: "Male",
    role: "trainer",
  },
  {
    id: "m5gr84i14",
    firstName: "Ayesha",
    lastName: "Kareem",
    education: "Digital Marketing",
    email: "ayesha_kareem@gmail.com",
    cnic: "42401-2678336-1",
    address: "987 Cedar Blvd",
    gender: "Female",
    role: "trainer",
  },
  {
    id: "m5gr84i15",
    firstName: "Farhan",
    lastName: "Qureshi",
    education: "Network Engineering",
    email: "farhan_qureshi@yahoo.com",
    cnic: "42401-1578337-3",
    address: "159 Birch Rd",
    gender: "Male",
    role: "trainer",
  },
  {
    id: "m5gr84i16",
    firstName: "Mariam",
    lastName: "Tariq",
    education: "Machine Learning",
    email: "mariam_tariq@hotmail.com",
    cnic: "42401-2878338-4",
    address: "753 Chestnut Ave",
    gender: "Female",
    role: "trainer",
  },
  {
    id: "m5gr84i17",
    firstName: "Hamza",
    lastName: "Butt",
    education: "Database Management",
    email: "hamza_butt@gmail.com",
    cnic: "42401-1478339-8",
    address: "852 Spruce St",
    gender: "Male",
    role: "trainer",
  },
  {
    id: "m5gr84i18",
    firstName: "Nida",
    lastName: "Ansari",
    education: "Cloud Computing",
    email: "nida_ansari@yahoo.com",
    cnic: "42401-3378340-0",
    address: "951 Willow Dr",
    gender: "Female",
    role: "trainer",
  }
  
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "education",
    header: "Education",
  },
  {
    accessorKey: "cnic",
    header: "CNIC",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy User ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>See Details</DropdownMenuItem>
            <DropdownMenuItem>Change Role</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function UserTrainerTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by Name..."
          value={table.getColumn("firstName")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}