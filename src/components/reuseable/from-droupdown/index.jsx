"use client";
import { useEffect, useState } from "react";
import { ChevronDown, CircleAlert } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const providerTypes = [
  { id: "cleaner", label: "Cleaner" },
  { id: "mover", label: "Mover" },
  { id: "remodeler", label: "Remodeler" },
  { id: "plumber", label: "Plumber" },
  { id: "carpenter", label: "Carpenter" },
];

export function FormDropdown({
  name,
  label,
  placeholder = "Select...",
  stylelabel,
  className,
}) {
  const { control } = useFormContext();
  const [selectedProvider, setSelectedProvider] = useState("");

  // Get label text for button display
  const getDisplayText = () => {
    if (!selectedProvider) return placeholder;
    const found = providerTypes.find(p => p.id === selectedProvider);
    return found ? found.label : placeholder;
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        useEffect(() => {
          if (typeof field.value === "string") {
            setSelectedProvider(field.value);
          } else if (Array.isArray(field.value) && field.value.length > 0) {
            // If value is array (from previous bug), just take the first one
            setSelectedProvider(field.value[0]);
          } else {
            setSelectedProvider("");
          }
        }, [field.value]);

        const selectProvider = (id) => {
          setSelectedProvider(id);
          field.onChange(id);
        };

        return (
          <div className={cn("w-full", className)}>
            {label && (
              <Label className={cn("mb-2 text-black text-base", stylelabel)}>
                {label}
              </Label>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between h-12 px-4 text-left font-normal bg-transparent"
                >
                  <span className="text-gray-700">{getDisplayText()}</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)] p-0">
                <div className="bg-white rounded-lg shadow-lg border">
                  {providerTypes.map((provider, index) => (
                    <div key={provider.id}>
                      <div className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50">
                        <Checkbox
                          id={provider.id}
                          checked={selectedProvider === provider.id}
                          onCheckedChange={() => selectProvider(provider.id)}
                          className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <label
                          htmlFor={provider.id}
                          className="text-sm font-medium text-gray-700 cursor-pointer flex-1"
                        >
                          {provider.label}
                        </label>
                      </div>
                      {index < providerTypes.length - 1 && (
                        <div className="border-b border-gray-200 mx-4" />
                      )}
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {error && error.message && (
              <div className="text-sm pt-[1px] text-end text-[#f73f4e] flex gap-1 items-center justify-end">
                {error.message}
                <CircleAlert size={14} />
              </div>
            )}
          </div>
        );
      }}
    />
  );
}
