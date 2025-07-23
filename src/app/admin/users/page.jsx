"use client";
import useConfirmation from "@/components/reuseable/delete-modal";
import { Deletebtn, Editbtn } from "@/components/reuseable/Icon-button";
import Modal from "@/components/reuseable/modal";
import NavTitle from "@/components/reuseable/nav-title";
import { Pagination } from "@/components/reuseable/pagination";
import SearchBox from "@/components/reuseable/start-card/search-box";
import { Table } from "@/components/reuseable/table";
import { TableCell, TableRow } from "@/components/ui/table";
import { PlaceholderImg } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function Users() {
    const { confirm } = useConfirmation();
    const [isPreview, setIsPreview] = useState(false);
    const headers = ["Sl. No", "Name", "Email","Phone", "Address", "Action"];

  const tableData = [
    {
        id: 1,
        name: "Md. Abid",
        img: PlaceholderImg(),
        email: "abid.hossain@example.com",
        address: "Dhanmondi Dhaka",
        phone: "+44 7700 900001"
    },
    {
        id: 2,
        name: "Salma Akter",
        img: PlaceholderImg(),
        email: "salma.akter@example.com",
        address: "Mirpur Dhaka",
        phone: "+44 7700 900002"
    },
    {
        id: 3,
        name: "Rahim Uddin",
        img: "/images/cleaner3.jpg",
        email: "rahim.uddin@example.com",
        address: "Lalbagh Dhaka",
        phone: "+44 7700 900003"
    },
    {
        id: 4,
        name: "Nusrat Jahan",
        img: "/images/cleaner4.jpg",
        email: "nusrat.jahan@example.com",
        address: "Gulshan Dhaka",
        phone: "+44 7700 900004"
    },
    {
        id: 5,
        name: "Sakib Khan",
        img: "/images/cleaner5.jpg",
        email: "sakib.khan@example.com",
        address: "Bashundhara Dhaka",
        phone: "+44 7700 900005"
    },
    {
        id: 6,
        name: "Rima Sultana",
        img: "/images/cleaner6.jpg",
        email: "rima.sultana@example.com",
        address: "Uttara Dhaka",
        phone: "+44 7700 900006"
    },
    {
        id: 7,
        name: "Jamal Hossain",
        img: "/images/cleaner7.jpg",
        email: "jamal.hossain@example.com",
        address: "Mohammadpur Dhaka",
        phone: "+44 7700 900007"
    },
    {
        id: 8,
        name: "Lamia Hossain",
        img: "/images/cleaner8.jpg",
        email: "lamia.hossain@example.com",
        address: "Rampura Dhaka",
        phone: "+44 7700 900008"
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
            <NavTitle title={"Users"} subTitle={"You can see total users of your app from here."} />
            <ul className="flex items-center flex-wrap justify-between pb-8">
                <li className="w-full lg:w-[400px] mb-3 md:mb-0">
                    <SearchBox />
                </li>
            </ul>
            <div>
                <Table headers={headers}>
                    {tableData.map((item, index) => (
                        <TableRow
                            key={index}
                            className="[&>td]:bg-white [&>td]:py-2 [&>td]:rounded-md  border-b-18 border-[#F6F6F6]"
                        >
                            <TableCell>{item.id}</TableCell>
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
                            <TableCell>{item.phone}</TableCell>
                            <TableCell>{item.address}</TableCell>
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
            {/* preview Profile the */}
            <Modal open={isPreview} setIsOpen={setIsPreview} className={"lg:max-w-[450px] py-5"}>
                <div className="text-center mb-6">
                    <div className="rounded-full flex justify-center">
                        <Image
                            src={PlaceholderImg()}
                            alt={"item3"}
                            width={100}
                            height={100}
                            className="rounded-full object-cover"
                        />
                    </div>
                    <p className="text-black text-xl font-semibold pt-1 pb-3">Md. Abid Hasan 1</p>
                    <div className="space-y-5 mt-4 text-xl">
                        <div className="flex justify-between">
                            <span>Email:</span>
                            <span className="text-black">example@gmail.com</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Address:</span>
                            <span className="text-black">Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Service Booked:</span>
                            <span className="text-black">5 times</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Reordered:</span>
                            <span className="text-black">3 times</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Phone:</span>
                            <span className="text-black">+44 7700 900001</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
