import Form from '@/components/reuseable/from';
import { FromInput } from '@/components/reuseable/from-input';
import Modal from '@/components/reuseable/modal';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import DocumentUpload from '../upload-document';

export default function AddProvider() {
    const [upload,setUpload]=useState(false)
    const [profileImage, setProfileImage] = useState(null);
    const from = useForm({
        // resolver: zodResolver(authSchema),
        defaultValues: {
            name: "",
            email: "",
            contact: "",
            address: ""
        },
    });


    const handleImageUpload = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setProfileImage(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };

    const handleSubmit = async (values) => {
        console.log("Login form:", values);
    };
    return (
        <div>
            <h1 className="font-semibold text-center text-lg">Add new service provider</h1>
            <div>
                <div className="text-center mt-5">
                    <div
                        onClick={handleImageUpload}
                        className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors overflow-hidden"
                    >
                        {profileImage ? (
                            <img
                                src={profileImage || "/placeholder.svg"}
                                alt="Provider"
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            <div className="w-12 h-12 bg-[#6DA40A] rounded-full flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                    <p className="text-gray-700 font-medium">
                        Upload provider picture
                    </p>
                </div>
                <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
                    <FromInput
                        className="bg-[#636363]/0.5 border"
                        label="Provider name"
                        stylelabel="text-black"
                        name="name"
                        placeholder="Enter your Name"
                    />
                    <FromInput
                        className="bg-[#636363]/0.5 border"
                        label="Provider email"
                        stylelabel="text-black"
                        name="email"
                        placeholder="Enter your Email"
                    />
                    <FromInput
                        className="bg-[#636363]/0.5 border"
                        label="Contact number"
                        stylelabel="text-black"
                        name="contact"
                        placeholder="Enter your contact"
                    />
                    <FromInput
                        className="bg-[#636363]/0.5 border"
                        label="Address"
                        stylelabel="text-black"
                        name="address"
                        placeholder="Enter your contact"
                    />

                    <div onClick={()=>setUpload(!upload)}  className="flex items-center justify-center  bg-gray-50 p-1 cursor-pointer">
                        <div className="w-full">
                            <div className="flex items-center justify-center p-8 bg-gray-100 border border-gray-200 rounded-2xl">
                                <div className="flex items-center gap-3">
                                    <Upload className="w-5 h-5 text-gray-600" />
                                    <span className="text-gray-700 font-medium">Upload documents</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button variant={"main"} className="rounded-sm w-full">Add Provider</Button>
                    </div>
                </Form>
                <Modal open={upload} setIsOpen={setUpload} className={"lg:max-w-[530px]"}>
                   <DocumentUpload/>
                </Modal>
            </div>
        </div>
    )
}

// DocumentUpload