"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Trash, Trash2 } from "lucide-react";

// Deltebtn
export function Editbtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-2 text-xs border border-none bg-[#F2FFDA] [.admin_&]:bg-primary1/25 rounded-lg cursor-pointer"
    >
      <Eye className="text-[#6DA40A] [.admin_&]:text-primary1" />
    </button>
  );
}

// Editbtn
export function Deletebtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-2 text-xs border border-none text-[#FF5353] bg-[#FFE8E8] rounded-lg cursor-pointer"
    >
      <Trash />
    </button>
  );
}
// back
export function Backbtn({ onClick }) {
  return (
    <h1 onClick={onClick} className="font-medium flex items-center gap-1 cursor-pointer"><ArrowLeft size={16} />Back</h1>

  );
}


// back
export function DeleteService({ onClick }) {
  return (
    <Button onClick={onClick } variant="ghost" size="icon" className="bg-[#FFE8E8] hover:bg-[#FFE8E8]">
    <Trash2 className="h-5 w-5 text-[#FF5353]" />
    <span className="sr-only">Delete image</span>
  </Button>
  );
}


