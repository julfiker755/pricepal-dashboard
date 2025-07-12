import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaPen } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Link from 'next/link';
import NavTitle from '@/components/reuseable/nav-title';

const services = [
    {
        title: "Cleaning Service",
        position: "col-start-1 row-start-1",
        options: [
            { label: "Less than 1000 square feet", price: "$250.00" },
            { label: "1000 - 3000 square feet", price: "$330.00" },
            { label: "More than 4000 square feet", price: "$500.00" },
            { label: "For 1 room", price: "$50.00" },
        ],
    },
    {
        title: "Moving Service",
        position: "col-start-1 row-start-3",
        options: [
            { label: "Moving Type", price: "Packing & Moving, Packing, Moving" },
            { label: "Area large", price: "Studio, 1 Bedroom, 2 - 4 bedrooms... " },
            { label: "Moving state", price: "Same, Different" },
            { label: "Area large", price: "$Studio, 1 Bedroom, 2 - 4 bedrooms... " },
        ],
    },
    {
        title: "Plumbing Service",
        position: "col-start-2 row-start-1",
        options: [
            { label: "Issue", price: "Water leak, Water heater, Sink..." },
            { label: "Describe issue", price: "Type" },
            { label: "Type of property", price: "Home, Apartment, Townhouse..." },
            { label: "Current status", price: "Just exploring, ready to hire..." },
        ],
    },
    {
        title: "Carpentry Service",
        position: "col-start-2 row-start-3",
        options: [
            { label: "Work type", price: "Furniture making, Custom cabinet" },
            { label: "Describe", price: "Type" },
            { label: "Measurements (if possible)", price: "less then 20 sq ft, ..." },
            { label: "Budget", price: "Low, Mid, High" },
        ],
    },
];

const ServiceCard = () => {
    return (
        <div>
            <NavTitle title={"Services"} subTitle={"You can manage all of your services from here."} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className={`w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-200`}
                    >
                        <CardHeader className="flex flex-row items-center justify-end">
                            <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                            <Link href={`/admin/service/add`}>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="rounded-3xl w-[100px] text-xl py-2 ml-12 hover:cursor-pointer"
                                >
                                    <FaPen /> Edit
                                </Button>
                            </Link>

                        </CardHeader>
                        <CardContent className="p-4 space-y-2">
                            {service.options.map((option, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center py-4 p-3 rounded-3xl border border-[#00000033]"
                                >
                                    <span className="text-base font-normal">{option.label}</span>
                                    <span className="text-xl font-medium">{option.price}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className='mt-5'>
                <Link href={`/admin/service/add`}>
                    <Button className="w-2/11 my-8 rounded-3xl hover:cursor-pointer">
                        <FiPlus /> Add new service
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
