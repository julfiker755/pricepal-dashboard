"use client"

import { useState } from "react"
import { Plus, Trash2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function CreateSelection() {
  const [selectionText, setSelectionText] = useState("")
  const [itemType, setItemType] = useState("Small")
  const [itemPrice, setItemPrice] = useState("0.00")
  const [items, setItems] = useState([
    { id: "1", text: "Bedroom", type: "Small", price: 30.0 },
    { id: "2", text: "Bedroom", type: "Medium", price: 30.0 },
    { id: "3", text: "Bedroom", type: "Large", price: 30.0 },
    { id: "4", text: "Bedroom", type: "Small", price: 30.0 },
    { id: "5", text: "Bedroom", type: "Medium", price: 30.0 },
    { id: "6", text: "Bedroom", type: "Large", price: 30.0 },
  ])

  const handleAddItem = () => {
    const priceValue = Number.parseFloat(itemPrice)
    if (selectionText.trim() === "" || isNaN(priceValue) || priceValue < 0) {
      return
    }
    const newItem = {
      id: Date.now().toString(),
      text: selectionText,
      type: itemType,
      price: priceValue,
    }
    setItems([...items, newItem])
    setSelectionText("")
    setItemPrice("0.00")
    setItemType("Small")
  }

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div>
          {/* Input and Add Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="selection-text" className="text-sm font-medium text-gray-700">
              Selection text
            </Label>
            <Input
              id="selection-text"
              placeholder="Type here"
              value={selectionText}
              onChange={(e) => setSelectionText(e.target.value)}
              className=" rounded-full border-gray-300 focus:ring-[#82B42E] focus:border-[#82B42E]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type-select" className="text-sm font-medium text-gray-700">
              Type
            </Label>
            <Select value={itemType} onValueChange={(value) => setItemType(value)}>
              <SelectTrigger
                id="type-select"
                className="w-full md:w-[120px]  rounded-full border-gray-300 focus:ring-[#82B42E] focus:border-[#82B42E]"
              >
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Small">Small</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="price-input" className="text-sm font-medium text-gray-700">
              Price
            </Label>
            <Input
              id="price-input"
              type="number"
              placeholder="00.00"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              className="w-full md:w-[100px] border-gray-300 rounded-full focus:ring-[#82B42E] focus:border-[#82B42E]"
            />
          </div>
          <Button
            onClick={handleAddItem}
            variant={"main"}
            className="w-full md:w-auto text-white rounded-lg px-6 py-2.5 flex items-center justify-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Add
          </Button>
        </div>

        {/* Item Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
          {items.map((item) => (
            <Card key={item.id} className="rounded-xl border-gray-200 p-1 shadow-none">
              <CardContent className="flex items-center justify-between p-1">
                <div className="flex flex-col">
                  <span className="font-semibold text-base text-gray-800">{item.text}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{item.type}</span>
                    <span className="mx-1">•</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteItem(item.id)}
                  className="bg-[#FEE2E2] hover:bg-[#FEE2E2] hover:text-[#EF4444] text-[#EF4444] rounded-lg p-2"
                >
                  <Trash2 className="h-5 w-5 hover:text-[#EF4444]" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-4">
          <Button variant={"main"} className="w-full rounded-full">
            Save
          </Button>
        </div>
    </div>
  )
}
