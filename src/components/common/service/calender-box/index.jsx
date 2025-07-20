"use client"

import { Calendar } from "@/components/ui/calendar"
import * as React from "react"

export function Calenderbox() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="h-[350px] w-[400px] rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  )
}
