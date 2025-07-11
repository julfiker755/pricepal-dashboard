"use client";
import { Eye, Trash } from "lucide-react";

// Deltebtn
export function Editbtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-2 text-xs border border-none bg-[#F2FFDA] rounded-lg cursor-pointer"
    >
      <Eye className="text-[#6DA40A]" />
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
