"use client";
import { Key, Trash2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import useConfirmation from "../delete-modal";
import Modal from "../modal";
import ChnagePassowrd from "@/components/common/admin/provider-password";
import ProviderDetails from "@/components/common/provider-details";
import { Button } from "@/components/ui/button";

const ProviderCard = () => {
    const { confirm } = useConfirmation();
    const [open, setIsOpen] = useState(false);
    const [isChnage, setIsChange] = useState(false)
    const [isPreview,setIsPreview]=useState(false)
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const handleDelete = async (id) => {
        const confirmed = await confirm();
        if (confirmed) {
            console.log(id);
        }
    };



    return (
        <div className="p-3 mx-auto bg-white w-full rounded-xl border border-gray-200">
            {/* Header Section */}
            <div className="flex justify-between items-start px-2">
                {/* Profile Info */}
                <div className="flex cursor-pointer items-center relative">
                    <img
                        src="/assets/abc.png"
                        alt="Avatar"
                        className="w-12 h-12 bg-gray-300 rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">ABC</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                            <FaMapMarkerAlt /> Dhaka, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Action Button with Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen(!open)}
                        className="w-8 h-8 bg-[#F6F6F6] cursor-pointer rounded-full p-1 flex items-center justify-center text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 z-50 w-60 rounded-lg border bg-white p-2 shadow-lg">
                            <button onClick={() => handleDelete(1)} className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-gray-800 transition-colors hover:bg-red-50 hover:text-red-600">
                                <Trash2 className="h-5 w-5 text-red-500 group-hover:text-red-600" />
                                Delete
                            </button>
                            <button onClick={()=>setIsChange(!isChnage)} className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-gray-800 transition-colors hover:bg-blue-50 hover:text-blue-600">
                                <Key className="h-5 w-5 text-blue-500 group-hover:text-blue-600" />
                                Change password
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Rating & Role */}
            <div className="flex justify-between px-2 pb-3 mt-2">
                <div className="flex items-center mt-1">
                    <span className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <svg
                            className="w-5 h-5 text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </span>
                    <span className="ml-2 text-sm text-gray-500">4.0 (100)</span>
                </div>

                <div>
                    <Button variant={"main"} className={"rounded-3xl"}>
                        Cleaner
                    </Button>
                    {/* <button className="bg-[#6DA40A] text-white px-4 py-2 rounded-3xl hover:bg-green-600 transition">
                        
                    </button> */}
                </div>
            </div>

            {/* Image Gallery */}
            <div className="flex gap-2 p-2 justify-between overflow-x-auto scrollbar-hidden">
                <img
                    src="/assets/clean.png"
                    alt="Service 1"
                    className="w-24 h-24 object-cover rounded"
                />
                <img
                    src="/assets/hand.png"
                    alt="Service 2"
                    className="w-24 h-24 object-cover rounded"
                />
                <img
                    src="/assets/bucket.png"
                    alt="Service 3"
                    className="w-24 h-24 object-cover rounded"
                />
                <img
                    src="/assets/hand2.png"
                    alt="Service 4"
                    className="w-24 h-24 object-cover rounded"
                />
            </div>

            {/* Action Button */}
            <div className="p-2 flex justify-center items-center">
                <Button variant={"main"} onClick={()=>setIsPreview(!isPreview)} className="cursor-pointer text-white px-4 py-2 rounded-3xl transition flex items-center justify-center w-2/3 text-base font-medium">
                    See provider details <MdOutlineArrowOutward className="ml-2 text-lg" />
                </Button>
            </div>
             {/* chnage password */}
            <Modal open={isChnage} setIsOpen={setIsChange} className={"p-2"}>
                <ChnagePassowrd />
            </Modal>
            {/* preview */}
            <Modal open={isPreview} setIsOpen={setIsPreview} className={"p-2 lg:max-w-[800px]"}>
               <ProviderDetails/>
            </Modal>
        </div>
    );
};

export default ProviderCard;
