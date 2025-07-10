"use client"
import { ConfirmDialogProvider } from "@/components/reuseable/delete-modal"

export default function Providers({ children }) {
    return (
        <ConfirmDialogProvider>
            {children}
        </ConfirmDialogProvider>
    )
}
