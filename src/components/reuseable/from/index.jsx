"use client"
import { cn } from "@/lib/utils";
import React from "react";
import {
    FormProvider,
} from "react-hook-form";







function Form({ children, className, onSubmit, from }) {
    const submit= (data) => {
        onSubmit(data);
        // form.reset(); 
    };

    return (
        <FormProvider {...from}>
            <form noValidate onSubmit={from.handleSubmit(submit)}>
                <div className={cn("w-full", className)}>{children}</div>
            </form>
        </FormProvider>
    );
}

export default Form;