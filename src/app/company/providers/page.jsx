"use client";
import AddProvider from "@/components/common/add-provider";
import ProviderProfile from "@/components/common/provider-profile";
import useConfirmation from "@/components/reuseable/delete-modal";
import { Deletebtn, Editbtn } from "@/components/reuseable/Icon-button";
import Modal from "@/components/reuseable/modal";
import NavTitle from "@/components/reuseable/nav-title";
import { Pagination } from "@/components/reuseable/pagination";
import SearchBox from "@/components/reuseable/start-card/search-box";
import { StatusBadge } from "@/components/reuseable/status";
import { Table } from "@/components/reuseable/table";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { PlaceholderImg } from "@/lib/utils";
import { Funnel, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function ServiceProviders() {
  const { confirm } = useConfirmation();
  const [isOpen, setIsOpen] = useState(false)
  const [isFilter, setIsFilter] = useState(false)
  const [isPreview, setIsPreview] = useState(false);
  const headers = ["User", "Email", "Type", "Status", "Action"];

  const tableData = [
    {
      id: 1,
      name: "Md. Abid",
      img: PlaceholderImg(),
      email: "abid.hossain@example.com",
      type: "Cleaner",
      status: "Available",
    },
    {
      id: 2,
      name: "Salma Akter",
      img: PlaceholderImg(),
      email: "salma.akter@example.com",
      type: "Cleaner",
      status: "Available",
    },
    {
      id: 3,
      name: "Rahim Uddin",
      img: "/images/cleaner3.jpg",
      email: "rahim.uddin@example.com",
      type: "Cleaner",
      status: "Available",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      img: "/images/cleaner4.jpg",
      email: "nusrat.jahan@example.com",
      type: "Cleaner",
      status: "Available",
    },
    {
      id: 5,
      name: "Sakib Khan",
      img: "/images/cleaner5.jpg",
      email: "sakib.khan@example.com",
      type: "Cleaner",
      status: "Available",
    },
    {
      id: 6,
      name: "Rima Sultana",
      img: "/images/cleaner6.jpg",
      email: "rima.sultana@example.com",
      type: "Cleaner",
      status: "Available",
    },
    {
      id: 7,
      name: "Jamal Hossain",
      img: "/images/cleaner7.jpg",
      email: "jamal.hossain@example.com",
      type: "Cleaner",
      status: "NotAvailable",
    },
    {
      id: 7,
      name: "Jamal Hossain",
      img: "/images/cleaner7.jpg",
      email: "jamal.hossain@example.com",
      type: "Cleaner",
      status: "NotAvailable",
    },
  ];

  const handleDelete = async (id) => {
    const confirmed = await confirm();
    if (confirmed) {
      console.log(id);
    }
  };

  return (
    <div>
      <NavTitle title={"Service Providers"} />
      <ul className="flex items-center flex-wrap justify-between pb-8">
        <li className="w-full lg:w-[400px] mb-3 md:mb-0">
          <SearchBox />
        </li>
        <li className="flex gap-4">
          <Button onClick={() => setIsOpen(!isOpen)} className="bg-primary rounded-sm h-full w-fit py-[10px] hover:bg-primary cursor-pointer">
            <Plus size={18} className="mr-1" />
            Add provider
          </Button>
          <div className="relative">
            <Button
              onClick={() => setIsFilter(!isFilter)}
              variant="outline"
              className="bg-transparent rounded-sm h-full py-[8px] text-black1 shadow-none cursor-pointer border border-gray-400 relative"
            >
              <Funnel size={18} className="mr-1" />
              Filter
            </Button>
            {isFilter && (
              <div className="absolute right-0 mt-2 top-8 bg-white rounded-lg shadow-lg border w-[150px] border-gray-200 z-10">
                {["Both", "Available", "Not Available"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setIsFilter(false)}
                    className="block w-full border-b-2 text-center px-6 py-2 text-gray-800 hover:bg-gray-100 transition cursor-pointer"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

        </li>
      </ul>
      <div>
        <Table headers={headers}>
          {tableData.map((item, index) => (
            <TableRow
              key={index}
              className="[&>td]:bg-white [&>td]:py-2 [&>td]:rounded-md  border-b-18 border-[#F6F6F6]"
            >
              <TableCell className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <Image
                      src={PlaceholderImg()}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {item.name}
                  </span>
                </div>
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                <StatusBadge status={item?.status} />
              </TableCell>
              <TableCell className="flex gap-2">
                <div className="flex justify-center gap-2">
                  <Editbtn onClick={() => setIsPreview(!isPreview)}></Editbtn>
                  <Deletebtn onClick={() => handleDelete()}></Deletebtn>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
        {/* pagination */}
        <ul className="flex flex-wrap justify-end my-7">
          <li className="font-medium">
            <Pagination
              page={1}
              onPageChange={() => { }}
              totalPage={10}
              per_page={2}
            ></Pagination>
          </li>
        </ul>
      </div>
      {/* preview */}
      <Modal open={isPreview} setIsOpen={setIsPreview} className={"p-4 lg:max-w-[900px]"}>
        <ProviderProfile setIsPreview={setIsPreview} />
      </Modal>
      {/* add provider */}
      <Modal open={isOpen} setIsOpen={setIsOpen} className={"p-4 lg:max-w-[600px]"}>
        <AddProvider />
      </Modal>
    </div>
  );
}
