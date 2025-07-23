"use client"
import { Editbtn } from '@/components/reuseable/Icon-button';
import Modal from '@/components/reuseable/modal';
import NavTitle from '@/components/reuseable/nav-title';
import { Pagination } from '@/components/reuseable/pagination';
import SearchBox from '@/components/reuseable/start-card/search-box';
import BookingBadge from '@/components/reuseable/status';
import { Table } from '@/components/reuseable/table';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { PlaceholderImg } from '@/lib/utils';
import { ArrowLeft, Funnel } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';


const Bookings = () => {
    const [status, setStatus] = useState("Pending");
    const [isApprove, setIsApprove] = useState(false)
    const [isFilter, setIsFilter] = useState(false)
    const [isPreview, setIsPreview] = useState(false)
    const headers = ["Name", "Email", "Time", "Service", "Phone", "Status", "Action"];

    const tableData = [
        {
            name: "Md. Abid",
            email: "example@gmail.com",
            phone: "07123 456789",
            date: "Thursday, March 27, 2025",
            time: "10:00 PM",
            service: "Cleaning",
            status: "Pending"
        },
        {
            name: "Md. Abid",
            email: "example@gmail.com",
            phone: "07123 456789",
            date: "Thursday, March 27, 2025",
            time: "10:00 PM",
            service: "Moving",
            status: "Pending"
        },
        {
            name: "Md. Abid",
            email: "example@gmail.com",
            phone: "07123 456789",
            date: "Thursday, March 27, 2025",
            time: "10:00 PM",
            service: "Remodeling",
            status: "Pending"
        },
        {
            name: "Md. Abid",
            email: "example@gmail.com",
            phone: "07123 456789",
            date: "Thursday, March 27, 2025",
            time: "10:00 PM",
            service: "Cleaning",
            status: "Pending"
        },
        {
            name: "Md. Abid",
            email: "example@gmail.com",
            phone: "07123 456789",
            date: "Thursday, March 27, 2025",
            time: "10:00 PM",
            service: "Moving",
            status: "Pending"
        },
        {
            name: "Md. Abid",
            email: "example@gmail.com",
            phone: "07123 456789",
            date: "Thursday, March 27, 2025",
            time: "10:00 PM",
            service: "Remodeling",
            status: "Pending"
        },
        {
            name: "Md. Abid",
            email: "example@gmail.com",
            phone: "07123 456789",
            date: "Thursday, March 27, 2025",
            time: "10:00 PM",
            service: "Cleaning",
            status: "Pending"
        },
        {
            name: "Md. Abid",
            email: "example@gmail.com",
            phone: "07123 456789",
            date: "Thursday, March 27, 2025",
            time: "10:00 PM",
            service: "Cleaning",
            status: "Pending"
        }
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

    const handleStatusChange = (status) => {
        console.log("Selected status:", status)
    }

    return (
        <div>
            <NavTitle title={"Bookings"} subTitle={"You can see total bookings of services from here."} />
            <ul className='flex justify-between flex-wrap space-y-2 lg:space-y-0'>
                <li> <SearchBox className={"max-w-md"} /></li>
                <li>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 font-medium rounded-sm bg-[#007AFF]">30</button>
                        <button className="px-4 font-medium rounded-sm bg-[#6DA40A]">60</button>
                        <button className="px-4 font-medium rounded-sm bg-[#8C63DA]">10</button>
                        <button className="px-4 font-medium rounded-sm bg-[#FF8C00]">10</button>
                        <button className="px-4 font-medium rounded-sm bg-[#FF5353]">10</button>
                    </div>
                </li>
                <li>
                    <div className="relative">
                        <Button
                            onClick={() => setIsFilter(!isFilter)}
                            variant="outline"
                            className="bg-primary hover:bg-primary rounded-sm h-full py-[8px] text-white hover:text-white  shadow-none cursor-pointer border border-gray-400 relative"
                        >
                            <Funnel size={18} className="mr-1 text-white" />
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
            {/* pending filed */}
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
                            <TableCell>
                                <ul>
                                    <li>{item.date}</li>
                                    <li className='text-gray-400'>{item.time}</li>
                                </ul>
                            </TableCell>
                            <TableCell>{item.service}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell>

                                {/* <BookingsStatus statusValue={status}/> */}

                                <BookingBadge status={status} />
                            </TableCell>
                            <TableCell>
                                <ul className="flex  gap-2">
                                    <li><Editbtn onClick={() => setIsPreview(!isPreview)} ></Editbtn></li>
                                </ul>
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
            {/* Preview Modal */}
            <Modal open={isPreview} setIsOpen={setIsPreview}>
                <div className="text-center mb-6">
                    <div className="size-28 mx-auto rounded-full mb-3">
                        <Image
                            src={PlaceholderImg()}
                            alt={"item3"}
                            width={100}
                            height={100}
                            className="rounded-full object-cover h-full w-full"
                        />
                    </div>
                    <h1 className='font-medium text-xl text-black1'>Md. Abid Hasan</h1>
                    <p className="text-black1">example@gmail.com</p>
                </div>
                <div className='w-full flex flex-col items-center gap-3'>
                    <div className='flex justify-between items-end w-full'>
                        <p className='text-xl'>Service:</p>
                        <p className='text-xl font-medium'>Cleaning</p>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <p className='text-xl'>Zip Code:</p>
                        <p className='text-xl font-medium'>19801</p>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <p className='text-xl'>House Size:</p>
                        <p className='text-xl font-medium'>1000-3000 sq ft</p>
                    </div>
                    <div className='flex justify-between items-center text-right w-full'>
                        <p className='text-xl'>Rooms:</p>
                        <p className='text-xl font-medium'>Bedroom - 2 <br />Kitchen - 2</p>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <p className='text-xl'>Date:</p>
                        <p className='text-xl font-medium'>Thursday, March 27, 2025</p>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <p className='text-xl'>Time:</p>
                        <p className='text-xl font-medium'>02:00 PM</p>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <p className='text-xl'>Phone:</p>
                        <p className='text-xl font-medium'>01741703755</p>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <p className='text-xl'>Cost:</p>
                        <p className='text-2xl font-medium'>$250.00</p>
                    </div>
                    <div className='flex justify-center gap-2'>
                        <Button variant={"decline"} size={"lg"}>
                            Decline
                        </Button>
                        <Button variant={"approve"} onClick={() => {
                            setIsPreview(false)
                            setIsApprove(!isApprove)
                        }} size={"lg"}>
                            Approve
                        </Button>
                    </div>
                </div>
            </Modal>
            {/*Approve modal*/}
            <Modal open={isApprove} setIsOpen={setIsApprove} className={"lg:max-w-[450px] p-5"}>
                <div className="flex justify-between">
                    <h1 onClick={() => {
                        setIsPreview(true)
                        setIsApprove(false)
                    }} className="font-medium flex items-center gap-1 cursor-pointer"><ArrowLeft size={16} />Back</h1>
                    <h1 className="font-semibold text-center text-base ml-10">Approve provider</h1>
                    <h1 className="opacity-0">Approve provider</h1>
                </div>
                <div>
                    <div className="border-b border-gray-200 pb-3">
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
};

export default Bookings