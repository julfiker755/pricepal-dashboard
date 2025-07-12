"use client"
import Form from '@/components/reuseable/from';
import { FromInput } from '@/components/reuseable/from-input';
import { chnageASchema} from '@/components/schema';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function ChnagePassowrd() {
    const from = useForm({
        resolver: zodResolver(chnageASchema),
        defaultValues: {
            name: "",
            password: ""
        },
    });

    const handleSubmit = async (values) => {
        console.log("Login form:", values);
    };
    return (
        <div>
            <h1 className="font-semibold text-center text-lg">Change store's admin panel password</h1>
            <Form className="space-y-4 mt-8" from={from} onSubmit={handleSubmit}>
                <div>
                    <h1 className='text-black text-sm mb-2'>Admin panel</h1>
                    <div className='border p-2 rounded-lg'>
                        <div className='space-y-2'>
                            <FromInput
                                className="bg-[#636363]/0.5 border"
                                stylelabel="text-black"
                                name="name"
                                placeholder="User Name"
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
