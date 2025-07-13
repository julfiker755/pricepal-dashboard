"use client";

import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

export default function UploadImg({
  value = null,
  onChange,
  label = "Upload image",
  className = "",
}) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (value instanceof File) {
      const reader = new FileReader();
      reader.onload = (event) => setPreview(event.target.result);
      reader.readAsDataURL(value);
    } else if (typeof value === "string") {
      setPreview(value);
    } else {
      setPreview(null);
    }
  }, [value]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file)); // faster than FileReader for object URLs
    onChange?.(file); // only send the File object
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("text-center mx-auto", className)}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageSelect}
        className="hidden"
      />

      <div
        onClick={triggerFileSelect}
        className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors overflow-hidden"
      >
        {preview ? (
          <img
            src={preview}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="w-12 h-12 bg-[#6DA40A] rounded-full flex items-center justify-center">
            <Camera className="text-white" />
          </div>
        )}
      </div>
      <p className="text-gray-700 font-medium">{label}</p>
    </div>
  );
}
