"use client"
import Form from "@/components/reuseable/from";
import { FromInput } from "@/components/reuseable/from-input";
import { passwordSchema } from "@/components/schema";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm } from "react-hook-form";



export default function ChangePassword() {
    const from = useForm({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            current_password: "",
            new_password: "",
            confirm_password: "",
        },
    });

    const handleChange = async (values) => {
        console.log("Password change form:", values);
    };
    return (
        <Form className="space-y-4" from={from} onSubmit={handleChange}>
            <FromInput
                className="bg-white border-none"
                label="Current Password"
                name="current_password"
                placeholder="********"
            />
            <FromInput
                className="bg-white border-none"
                label="New Password"
                name="new_password"
                placeholder="********"
            />
            <FromInput
                className="bg-white border-none"
                label="Confirm Password"
                name="confirm_password"
                placeholder="********"
            />
            <div className="flex justify-center">
                <Button variant={"main"} className="px-8">
                    Save
                </Button>
            </div>
        </Form>
    )
}
