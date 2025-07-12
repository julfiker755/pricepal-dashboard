"use client";
import Modal from "@/components/reuseable/modal";
import { StatusBadge } from "@/components/reuseable/status";
import { PlaceholderImg } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";


const fakeUserServices = [
    {
        id: 1,
        name: "Shila Akhter",
        email: "shila.akhter@example.com",
        avatar: "/images/cleaner1.jpg",
        service: {
            date: "2025-07-12T10:00:00Z",
            time: "10:00 AM",
            status: "Completed",
        },
    },
    {
        id: 2,
        name: "Rafiq Hossain",
        email: "rafiq.hossain@example.com",
        avatar: "/images/cleaner2.jpg",
        service: {
            date: "2025-07-14T14:30:00Z",
            time: "2:30 PM",
            status: "In Progress",
        },
    },
    {
        id: 3,
        name: "Nusrat Jahan",
        email: "nusrat.jahan@example.com",
        avatar: "/images/cleaner3.jpg",
        service: {
            date: "2025-07-10T09:00:00Z",
            time: "9:00 AM",
            status: "Ongoing",
        },
    },
    {
        id: 4,
        name: "Tanvir Rahman",
        email: "tanvir.rahman@example.com",
        avatar: "/images/cleaner4.jpg",
        service: {
            date: "2025-07-15T16:00:00Z",
            time: "4:00 PM",
            status: "Completed",
        },
    },
    {
        id: 5,
        name: "Mitu Akter",
        email: "mitu.akter@example.com",
        avatar: "/images/cleaner5.jpg",
        service: {
            date: "2025-07-13T11:15:00Z",
            time: "11:15 AM",
            status: "Ongoing",
        },
    },
];

export default function ServicesList() {
    const [userServices, setUserServices] = useState([]);
    const [isProfile, setIsProfile] = useState(false)
    useEffect(() => {
        setUserServices(fakeUserServices);
    }, []);

    return (
        <div>
            <div className="space-y-4">
                {userServices.map((userService) => (
                    <div
                        onClick={() => {
                            setIsProfile(!isProfile)
                        }}
                        key={userService.id}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm cursor-pointer"
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={PlaceholderImg()}
                                alt={userService.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-medium text-gray-900">
                                    {userService.name}
                                </h3>
                                <p className="text-sm text-gray-500">{userService.email}</p>
                                <p className="text-sm text-gray-500">
                                    {new Date(userService.service.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="text-right">
                                <div className="flex items-center text-sm text-gray-500 mb-1">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    {new Date(userService.service.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    {userService.service.time}
                                </div>
                            </div>
                            <StatusBadge status={userService.service.status} />
                        </div>
                    </div>
                ))}
            </div>
            {/* modal open */}
            <Modal open={isProfile} setIsOpen={setIsProfile} className={"lg:max-w-[450px]"}>
                <div className="text-center mb-6">
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
                            <span className="text-black">1000–3000 sq ft</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Rooms:</span>
                            <div className="text-right text-black">
                                <div>Bedroom - 2</div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <span>Address:</span>
                            <span className="text-black">Dhaka, Bangladesh</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Date:</span>
                            <span className="text-black">Thursday, March 27, 2025</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Time:</span>
                            <span className="text-black">02:00 PM</span>
                        </div>

                        <div className="flex justify-between text-lg font-semibold">
                            <span>Cost:</span>
                            <span className="text-black">$250.00</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
