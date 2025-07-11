"use client";
import { Pagination } from "@/components/reuseable/pagination";
import SearchBox from "@/components/reuseable/start-card/search-box";
import { Table } from "@/components/reuseable/table";
import { TableCell, TableRow } from "@/components/ui/table";
import { PlaceholderImg } from "@/lib/utils";
import OrderBadge from "@/components/reuseable/status";
import Modal from "@/components/reuseable/modal";
import { Editbtn } from "@/components/reuseable/Icon-button";
import NavTitle from "@/components/reuseable/nav-title";
import React, {useState } from "react";
import Image from "next/image";

export default function Orders() {
  const [status, setStatus] = useState("Pending");
  const [isPreview, setIsPreview] = useState(false);
  const headers = ["User", "Email", "Time", "Service", "Status", "Action"];

  const orderItem = [
    {
      id: 1,
      user: "Md. Abid",
      email: "example@gmail.com",
      time: "Thursday, March 27, 2025 10:00 PM",
      service: "Cleaning",
      status: status,
      action: "View",
    },
    {
      id: 2,
      user: "Julfiker Rahman",
      email: "julfi@example.com",
      time: "Friday, March 28, 2025 11:00 AM",
      service: "Laundry",
      status: status,
      action: "View",
    },
    {
      id: 3,
      user: "Sadia Karim",
      email: "sadia@example.com",
      time: "Saturday, March 29, 2025 02:30 PM",
      service: "Cooking",
      status: status,
      action: "View",
    },
    {
      id: 4,
      user: "Imran Hossain",
      email: "imran@example.com",
      time: "Sunday, March 30, 2025 09:45 AM",
      service: "Cleaning",
      status: status,
      action: "View",
    },
    {
      id: 5,
      user: "Rafiul Islam",
      email: "rafiul@example.com",
      time: "Monday, March 31, 2025 03:15 PM",
      service: "Gardening",
      status: status,
      action: "View",
    },
    {
      id: 6,
      user: "Nusrat Jahan",
      email: "nusrat@example.com",
      time: "Tuesday, April 1, 2025 06:00 PM",
      service: "Pet Care",
      status: status,
      action: "View",
    },
  ];



  return (
    <div>
       <NavTitle title="Orders"/>
      <SearchBox className="max-w-md" />

      <div className="flex border-b border-gray-200 my-3">
        {["Pending", "Ongoing", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setStatus(item)}
            className={`cursor-pointer px-6 py-3 text-sm font-medium text-[#333] border-b-2 border-transparent hover:text-[#6DA40A] ${
              status === item ? "!border-[#6DA40A]" : ""
            } focus:outline-none`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div>
        <Table headers={headers}>
          {orderItem.map((item) => (
            <TableRow
              key={item.id}
              className="[&>td]:bg-white [&>td]:py-2 [&>td]:rounded-md border-b-18 border-[#F6F6F6]"
            >
              <TableCell className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <Image
                      src={PlaceholderImg()}
                      alt={item.user}
                      width={100}
                      height={100}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {item.user}
                  </span>
                </div>
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.service}</TableCell>
              <TableCell>
                <OrderBadge status={item.status} />
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Editbtn onClick={() => setIsPreview(!isPreview)}></Editbtn>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>

        {/* Pagination */}
        <ul className="flex flex-wrap justify-end my-7">
          <li className="font-medium">
            <Pagination
              page={1}
              onPageChange={() => {}}
              totalPage={10}
              per_page={2}
            />
          </li>
        </ul>
      </div>
      {/* preview */}
      <Modal open={isPreview} setIsOpen={setIsPreview}>
        <h1>Hello Preview</h1>
      </Modal>
    </div>
  );
}
