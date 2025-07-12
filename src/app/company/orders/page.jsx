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
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Orders() {
  const [status, setStatus] = useState("Pending");
  const [isPreview, setIsPreview] = useState(false);
  const [isAssign, setIsAssign] = useState(false)
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


  const providers = [
    {
      id: 1,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
    {
      id: 2,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
    {
      id: 3,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
    {
      id: 4,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
    {
      id: 5,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
  ];



  return (
    <div>
      <NavTitle title="Orders" />
      <SearchBox className="max-w-md" />

      <div className="flex border-b border-gray-200 my-3">
        {["Pending", "Ongoing", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setStatus(item)}
            className={`cursor-pointer px-6 py-3 text-sm font-medium text-[#333] border-b-2 border-transparent hover:text-[#6DA40A] ${status === item ? "!border-[#6DA40A]" : ""
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
              onPageChange={() => { }}
              totalPage={10}
              per_page={2}
            />
          </li>
        </ul>
      </div>
      {/* preview Modal*/}
      <Modal open={isPreview} setIsOpen={setIsPreview} className={"px-2"}>
        <div className="text-center">
          <div className="size-28 mx-auto rounded-full">
            <Image
              src={PlaceholderImg()}
              alt={"item3"}
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <p className="text-gray-500">example@gmail.com</p>
          <div className="text-base space-y-2 mt-4">
            <div className="flex justify-between">
              <span>Service:</span>
              <span className="text-black">Cleaning</span>
            </div>

            <div className="flex justify-between">
              <span>Zip Code:</span>
              <span className="text-black">19801</span>
            </div>

            <div className="flex justify-between">
              <span>House Size:</span>
              <span className="text-black">2993 sqft</span>
            </div>

            <div className="flex justify-between">
              <span>Rooms:</span>
              <div className="text-right text-black">
                <div>Bedroom-3, Kitchen-1</div>
              </div>
            </div>

            <div className="flex justify-between">
              <span>Date:</span>
              <span className="text-black">Friday, July 25, 2025</span>
            </div>

            <div className="flex justify-between">
              <span>Time:</span>
              <span className="text-black">02:00 PM</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Cost:</span>
              <span className="text-black">$1680</span>
            </div>
          </div>
          <Button onClick={() => {
            setIsPreview(false)
            setIsAssign(!isAssign)
          }} variant={"main"} className={"w-full mt-3"}>Assign Provider</Button>
        </div>
      </Modal>
      {/* asssign  Modal*/}
      <Modal open={isAssign} setIsOpen={setIsAssign} className={"lg:max-w-[450px] p-3"}>
        <div className="flex justify-between">
        <h1 onClick={() => {
            setIsPreview(true)
            setIsAssign(!isAssign)
          }} className="font-medium flex items-center gap-1 cursor-pointer"><ArrowLeft size={16} />Back</h1>
          <h1 className="font-semibold text-center text-base ml-10">Assign provider</h1>
          <h1 className="opacity-0">Assign provider</h1>
        </div>
        <div>
        <div className="p-4 border-b border-gray-200">
          <div className="relative border rounded-md">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="search for provider"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg  text-gray-600 placeholder-gray-500"
            />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="p-2 rounded-md border border-gray-200 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={provider.avatar || "/placeholder.svg"}
                  alt={provider.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{provider.name}</h3>
                  <p className="text-sm text-gray-500">{provider.location}</p>
                </div>
              </div>
              <Button
              className={"border border-gray-200 bg-gray-300 hover:bg-gray-300 text-black cursor-pointer rounded-lg px-8 py-2 font-medium transition-colors "}
              >
                Assign
              </Button>
            </div>
          ))}
        </div>
        </div>
      </Modal>
    </div>
  );
}
