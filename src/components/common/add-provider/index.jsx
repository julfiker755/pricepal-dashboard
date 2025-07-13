import Form from '@/components/reuseable/from';
import { FromInput } from '@/components/reuseable/from-input';
import Modal from '@/components/reuseable/modal';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import DocumentUpload from '../upload-document';
import UploadImg from '@/components/reuseable/upload-img';

export default function AddProvider() {
    const [upload, setUpload] = useState(false)
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
                <UploadImg
                    onChange={(img) => console.log(img)}
                    label=" Upload provider picture"
                    className={"mt-5"}
                />

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

                    <div onClick={() => setUpload(!upload)} className="flex items-center justify-center  bg-gray-50 p-1 cursor-pointer">
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
                    <DocumentUpload />
                </Modal>
            </div>
        </div>
    )
}

