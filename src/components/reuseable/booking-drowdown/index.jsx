"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const defaultStatusOptions = [
  { value: "pending", label: "Pending", color: "bg-blue-500" },
  { value: "approve", label: "Approve", color: "bg-green-500" },
  { value: "ongoing", label: "Ongoing", color: "bg-purple-500" },
  { value: "completed", label: "Completed", color: "bg-orange-500" },
  { value: "decline", label: "Decline", color: "bg-red-500" },
]

export default function StatusDropdown({
  value,
  onChange,
  options = defaultStatusOptions,
  className,
}) {
  const getStatusObject = (val) => options.find((s) => s.value === val) || options[0]

  const [selectedStatus, setSelectedStatus] = useState(getStatusObject(value))

  useEffect(() => {
    if (value) {
      const found = getStatusObject(value)
      setSelectedStatus(found)
    }
  }, [value, options])

  const handleChange = (status) => {
    setSelectedStatus(status)
    onChange?.(status)
  }

  return (
    <div className={cn("w-full max-w-sm", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={`w-full justify-between rounded-full h-10 text-white px-4  ${selectedStatus.color} hover:${selectedStatus.color}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full bg-white`} />
              <span className="font-medium text-white ">{selectedStatus.label}</span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)] p-2 bg-gray-50 border-gray-200">
          {options.map((status) => (
            <DropdownMenuItem
              key={status.value}
              onClick={() => handleChange(status)}
              className="p-0 mb-2 last:mb-0 focus:bg-transparent"
            >
              <div
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-full text-white font-medium cursor-pointer hover:opacity-90 transition-opacity",
                  status.color
                )}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
                {status.label}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
