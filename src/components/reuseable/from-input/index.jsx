"use client";
import { useState } from "react";
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function FromInput({
  name,
  type = "text",
  eye = false,
  label,
  placeholder,
  stylelabel,
  className,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const { control } = useFormContext();

  const inputType = eye ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          {label && (
            <Label className={cn("mb-2 text-black text-base", stylelabel)}>
              {label}
            </Label>
          )}
          <div className="relative">
            <Input
              className={className}
              {...field}
              type={inputType}
              placeholder={placeholder}
            />
            {eye && (
              <div
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute cursor-pointer top-[6px] right-2"
              >
                {isPasswordVisible ? (
                  <EyeOff className="text-muted-foreground" size={20} />
                ) : (
                  <Eye className="text-muted-foreground" size={20} />
                )}
              </div>
            )}
          </div>
          {error?.message && (
            <div className="text-sm pt-[1px] text-end text-[#f73f4e] flex gap-1 items-center justify-end">
              {error.message}
              <CircleAlert size={14} />
            </div>
          )}
        </div>
      )}
    />
  );
}
