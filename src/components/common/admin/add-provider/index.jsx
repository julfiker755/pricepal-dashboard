"use client"
import Form from '@/components/reuseable/from';
import { FormDropdown } from '@/components/reuseable/from-droupdown';
import { FromInput } from '@/components/reuseable/from-input';
import { providerASchema } from '@/components/schema';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddProvider() {
    const from = useForm({
        resolver: zodResolver(providerASchema),
        defaultValues: {
            provider: "",
            city: "",
            state: "",
            email: "",
            password: ""
        },
    });

    const handleSubmit = async (values) => {
        console.log("Login form:", values);
    };
    return (
        <div>
            <h1 className="font-semibold text-center text-lg">Add New Provider</h1>
            <Form className="space-y-4 mt-8" from={from} onSubmit={handleSubmit}>
                <FormDropdown name="provider" />
                <div className='flex gap-2'>
                    <FromInput
                        className="bg-[#636363]/0.5 border"
                        stylelabel="text-black"
                        name="city"
                        placeholder="City"
                    />
                    <FromInput
                        className="bg-[#636363]/0.5 border"
                        stylelabel="text-black"
                        name="state"
                        placeholder="State"
                    />
                </div>
                <div>
                    <h1 className='text-black text-sm mb-2'>Admin panel</h1>
                    <div className='border p-2 rounded-lg'>
                        <div className='space-y-2'>
                            <FromInput
                                className="bg-[#636363]/0.5 border"
                                stylelabel="text-black"
                                name="email"
                                placeholder="Email"
                            />
                            <FromInput
                                className="bg-[#636363]/0.5 border"
                                eye={true}
                                stylelabel="text-black"
                                name="password"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                </div>



                <div className="flex justify-center">
                    <Button variant={"main"} className="rounded-sm w-full">Create</Button>
                </div>
            </Form>
        </div>
    )
}
