"use client"
import { StatusBadge } from "@/components/reuseable/status";
import { PlaceholderImg } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ServicesList from "../service-list";


export default function ProviderProfile({setIsPreview}) {
    const [seeAll, setSeeAll] = useState(false);
    const defaultProvider = {
        name: "Md. Abid Hasan",
        email: "example@gmail.com",
        type: "Cleaner",
        contactNumber: "+1234560987",
        address: "Dhaka, Bangladesh.",
        serviceCount: "5 times",
        verified: true,
        avatar: PlaceholderImg(),
        idDocuments: [PlaceholderImg(), PlaceholderImg()],
    };

    const services = [
        {
            id: 1,
            clientName: "Maria jones",
            location: "Dhaka, Bangladesh",
            date: "21-04-2025",
            status: "In progress",
            avatar: PlaceholderImg(),
        },
        {
            id: 2,
            clientName: "Maria jones",
            location: "Dhaka, Bangladesh",
            date: "21-04-2025",
            status: "Completed",
            avatar: PlaceholderImg(),
        },
        {
            id: 3,
            clientName: "Maria jones",
            location: "Dhaka, Bangladesh",
            date: "21-04-2025",
            status: "Completed",
            avatar: PlaceholderImg(),
        },
        {
            id: 4,
            clientName: "Maria jones",
            location: "Dhaka, Bangladesh",
            date: "21-04-2025",
            status: "Completed",
            avatar: PlaceholderImg(),
        },
        {
            id: 5,
            clientName: "Maria jones",
            location: "Dhaka, Bangladesh",
            date: "21-04-2025",
            status: "Completed",
            avatar: PlaceholderImg(),
        },
    ];


    const providerData = defaultProvider;


    return (
        <div>
            <div className={`mb-2 flex items-center ${seeAll ? "justify-between":"justify-center"}`}>
                {seeAll && (<h1 onClick={()=> {
                    setIsPreview(false)
                    setSeeAll(!seeAll)
                }} className="font-medium flex items-center gap-1 cursor-pointer"><ArrowLeft size={16} />Back</h1>)}
                <h1 className="font-semibold text-center text-lg">{seeAll ? "All services by this provider":"Provider Profile"}</h1>
                <h1 className="opacity-0">2</h1>
            </div>
            {seeAll ? (<ServicesList/>) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Personal Information */}
                    <div>
                        <div className="flex items-center mb-6">
                            <svg
                                className="w-5 h-5 text-gray-600 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Personal information
                            </h3>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            {/* Profile Section */}
                            <div className="text-center mb-6">
                                <div className="size-20 mx-auto rounded-full">
                                    <Image
                                        src={PlaceholderImg()}
                                        alt={"item3"}
                                        width={100}
                                        height={100}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    {providerData.name}
                                </h4>
                                <p className="text-gray-500">{providerData.email}</p>
                            </div>

                            {/* Details */}
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Type:</span>
                                    <span className="font-medium text-gray-900">
                                        {providerData.type}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Contact number:</span>
                                    <span className="font-medium text-gray-900">
                                        {providerData.contactNumber}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Address:</span>
                                    <span className="font-medium text-gray-900">
                                        {providerData.address}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Service given:</span>
                                    <span className="font-medium text-gray-900">
                                        {providerData.serviceCount}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Identity verification:
                                    </span>
                                    <span className="font-medium text-[#6DA40A]">
                                        {providerData.verified ? "Verified" : "Not Verified"}
                                    </span>
                                </div>
                            </div>

                            {/* ID Documents */}
                            <div className="mt-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {providerData.idDocuments?.map((doc, index) => (
                                        <div
                                            key={index}
                                            className="border border-gray-200 rounded-lg p-2"
                                        >
                                            <img
                                                src={doc || "/placeholder.svg"}
                                                alt={`ID Document ${index + 1}`}
                                                className="w-full h-20 object-cover rounded"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <div className="flex items-center mb-6">
                            <svg
                                className="w-5 h-5 text-gray-600 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </svg>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Services
                            </h3>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="space-y-4">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={service.avatar || "/placeholder.svg"}
                                                alt={service.clientName}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    {service.clientName}
                                                </h4>
                                                <p className="text-sm text-gray-500">
                                                    {service.location}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {service.date}
                                                </p>
                                            </div>
                                        </div>
                                        <StatusBadge status={service.status} />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => setSeeAll(!seeAll)}
                                    className="text-gray-600 hover:text-gray-800 font-medium border border-gray-200 rounded-lg px-8 py-2 hover:bg-gray-200 cursor-pointer"
                                >
                                    See all
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
