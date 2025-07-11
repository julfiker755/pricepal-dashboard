"use client";
import { TitleProvider } from "@/components/context/title";
import { ConfirmDialogProvider } from "@/components/reuseable/delete-modal";

export default function Providers({ children }) {
  return (
    <TitleProvider>
      <ConfirmDialogProvider>{children}</ConfirmDialogProvider>
    </TitleProvider>
  );
}
