"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"


export function ServiceForm({
  initialService = "",
  initialPrice = "",
  onSubmit,
  submitButtonText
}) {
  const [service, setService] = useState(initialService)
  const [price, setPrice] = useState(initialPrice)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(service, price)
  }

  const services = ["Cleaning", "Moving", "Remodeling", "Plumbing", "Carpentry"]

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="service">Your service</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger
              id="service"
              className="rounded-lg text-base w-full"
              style={{ height: "3rem" }}
            >
              <SelectValue placeholder="-select service-" />
            </SelectTrigger>
            <SelectContent className="w-full">
              {services.map((s) => (
                <SelectItem key={s} value={s} className="w-full">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="price">Starting price</Label>
          <div className="relative">
            <Input
              id="price"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="pl-8 rounded-lg h-12 text-base"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          </div>
        </div>
        <Button type="submit" className="w-full bg-[#6DA40A] hover:bg-[#5C8C08] text-white h-12 text-base rounded-lg">
          {submitButtonText}
        </Button>
      </form>
    </div>
  )
}
