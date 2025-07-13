"use client"
import ServiceAdd from "@/components/common/company/service-add";
import Form from "@/components/reuseable/from";
import { FromInput } from "@/components/reuseable/from-input";
import { FromTextArea } from "@/components/reuseable/from-textarea";
import NavTitle from "@/components/reuseable/nav-title";
import UploadImg from "@/components/reuseable/upload-img";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, MapPin, Phone, UserRound, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Settings() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const from = useForm({
        // resolver: zodResolver(authSchema),
        defaultValues: {
            company_name: "",
            city: "",
            state: "",
            contact_number: "",
            location: "",
            employee_count: "",
            work_experience: ""
        },
    });

    const handleSubmit = async (values) => {
        console.log("Login form:", values);
    };


    const handleFileUpload = () => {
        // Simulate file upload
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const newFile = {
                    id: Date.now(),
                    name: file.name,
                    file: URL.createObjectURL(file), // Create a local URL for the file
                };
                setUploadedFiles([...uploadedFiles, newFile]);
            }
        };
        input.click();
    };

    const handleRemoveFile = (fileId) => {
        setUploadedFiles(uploadedFiles.filter((file) => file.id !== fileId));
    };



    return (
        <div>
            <NavTitle title={"Company Settings"} />
            <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Company Logo Section */}
                    <div className="bg-white rounded-lg p-6 w-full">
                        <UploadImg
                            onChange={(img) => console.log(img)}
                            label="Company logo"
                            className={"pb-3"}
                        />

                        <div className="space-y-4">
                            <FromInput
                                className="bg-[#636363]/0.5 border py-2 h-12 rounded-md"
                                stylelabel="text-[#636363]"
                                name="company_name"
                                placeholder="Company name"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FromInput
                                    className="bg-[#636363]/0.5 border py-2 h-12 rounded-md"
                                    stylelabel="text-[#636363]"
                                    name="city"
                                    placeholder="City"
                                />
                                <FromInput
                                    className="bg-[#636363]/0.5 border py-2 h-12 rounded-md"
                                    stylelabel="text-[#636363]"
                                    name="state"
                                    placeholder="State"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 col-span-1 lg:col-span-2">
                             {/* <FromTextArea
                                label={"About company"}
                                    className="bg-[#636363]/0.5 border py-2 h-12 rounded-md"
                                    stylelabel="text-black"
                                    name="state"
                                /> */}
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            About company
                        </h3>
                        <textarea
                            placeholder="Type here"
                            rows={9}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none outline-none"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
                    <div className=" rounded-lg p-6 h-auto">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">
                            Overview
                        </h3>
                        <div className="space-y-4">
                            <FromInput
                                className="bg-white border py-2 h-16 rounded-md"
                                stylelabel="text-[#636363]"
                                name="contact_number"
                                placeholder="Contact Number"
                                icon={<Phone size={19} />}
                            />
                            <FromInput
                                className="bg-white border py-2 h-16 rounded-md"
                                stylelabel="text-[#636363]"
                                name="location"
                                placeholder="Location Hare"
                                icon={< MapPin size={19} />}
                            />
                            <FromInput
                                className="bg-white border py-2 h-16 rounded-md"
                                stylelabel="text-[#636363]"
                                name="employee_count"
                                placeholder="Employee count"
                                icon={<UserRound size={19} />}
                            />
                            <FromInput
                                className="bg-white border py-2 h-16 rounded-md"
                                stylelabel="text-[#636363]"
                                name="work_experience"
                                placeholder="Work experience"
                                icon={<BriefcaseBusiness size={19} />}
                            />
                        </div>
                    </div>
                    <div className="p-6 h-auto">
                        <ServiceAdd />
                    </div>

                    <div className="rounded-lg p-6 h-auto">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Photos</h3>

                        {/* Upload Area */}
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                            <svg
                                className="w-8 h-8 text-gray-400 mx-auto mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                            </svg>
                            <p className="text-gray-600 mb-4">Upload images</p>
                            <Button
                                variant={"main"}
                                onClick={handleFileUpload}
                                className="rounded-full px-8"
                            >
                                Browse
                            </Button>
                        </div>

                        {/* Photo Grid with Remove Icon */}
                        {uploadedFiles.length > 0 && (
                            <div className="flex flex-wrap gap-5">
                                {uploadedFiles.map((file, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-square size-24 bg-gray-200 rounded-lg overflow-hidden group"
                                    >
                                        <Image
                                            src={file.file}
                                            alt={`Uploaded ${index}`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full object-cover rounded"
                                        />
                                        <button
                                            onClick={() => handleRemoveFile(file.id)}
                                            className="absolute top-1 cursor-pointer right-1 bg-white rounded-full p-1 text-red-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <Button className={"bg-gray-600 hover:bg-gray-600 px-10"}>Save changes</Button>
            </Form>
        </div>
    )
}
