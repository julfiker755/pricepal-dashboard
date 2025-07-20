"use client"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CreateAction({ hanldeCreateAction }) {
    const [modalName, setModalName] = useState("")
    const [fields, setFields] = useState([{ id: 1, name: "", type: "text", price: "0.00" }])
    const [nextId, setNextId] = useState(2)

    const handleAddField = () => {
        setFields([...fields, { id: nextId, name: "", type: "text", price: "0.00" }])
        setNextId(nextId + 1)
    }

    const handleFieldChange = (id, fieldKey, value) => {
        setFields(
            fields.map((field) => {
                if (field.id === id) {
                    if (fieldKey === "price") {
                        const numericValue = value.replace(/[^0-9.]/g, "")
                        const parts = numericValue.split(".")
                        const formatted = parts[0] + (parts[1] ? "." + parts[1].slice(0, 2) : "")
                        return { ...field, price: formatted }
                    }
                    return { ...field, [fieldKey]: value }
                }
                return field
            })
        )
    }

    const formatPriceDisplay = (price) => {
        const numeric = parseFloat(price)
        return isNaN(numeric) ? "$0.00" : `$${numeric.toFixed(2)}`
    }

    const handleSave = () => {
        const payload = {
            modalName,
            fields: fields.map(({ name, type, price }) => ({
                name,
                type,
                price: parseFloat(price),
            })),
        }
        hanldeCreateAction(payload)
        console.log("Saved Data:", payload)
    }

    return (
        <div>
            {/* Modal Name */}
            <div className="mb-6">
                <Label htmlFor="modal-name" className="text-sm font-medium">
                    Modal name
                </Label>
                <Input
                    id="modal-name"
                    placeholder="Type here"
                    value={modalName}
                    onChange={(e) => setModalName(e.target.value)}
                    className="border flex-1 border-input bg-background px-3 mt-1 py-2 text-sm shadow-none rounded-full"
                />
            </div>
            {/* Dynamic Fields */}
            <div className="space-y-4 mb-6">
                {fields.map((field) => (
                    <div key={field.id} className="flex gap-2">
                        {/* Field Name */}
                        <div>
                            <Label htmlFor={`field-name-${field.id}`} className="text-sm font-medium">
                                Field name
                            </Label>
                            <Input
                                id={`field-name-${field.id}`}
                                placeholder="Type here"
                                value={field.name}
                                onChange={(e) => handleFieldChange(field.id, "name", e.target.value)}
                                className="border flex-1 border-input w-full bg-background mt-1 px-3 py-2 text-sm shadow-none rounded-full"
                            />
                        </div>

                        {/* Field Type */}
                        <div>
                            <Label htmlFor={`field-type-${field.id}`} className="text-sm font-medium text-gray-700">
                                Field type
                            </Label>
                            <Select
                                value={field.type}
                                onValueChange={(value) => handleFieldChange(field.id, "type", value)}
                            >
                                <SelectTrigger
                                    id={`field-type-${field.id}`}
                                    className="border border-input bg-background px-3 w-[100px] py-2 text-sm shadow-none mt-1 rounded-full"
                                >
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="option">Option</SelectItem>
                                    <SelectItem value="text">Text</SelectItem>
                                    <SelectItem value="number">Number</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Field Price */}
                        <div>
                            <Label htmlFor={`field-price-${field.id}`} className="text-sm font-medium text-gray-700">
                                Price
                            </Label>
                            <Input
                                id={`field-price-${field.id}`}
                                value={formatPriceDisplay(field.price)}
                                onChange={(e) => handleFieldChange(field.id, "price", e.target.value)}
                                onFocus={(e) => {
                                    e.target.value = field.price
                                }}
                                onBlur={(e) => {
                                    e.target.value = formatPriceDisplay(field.price)
                                }}
                                className="border w-[100px] border-input mt-1 bg-background px-3 py-2 text-sm shadow-none rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Field Button */}
            <Button
                onClick={handleAddField}
                variant="outline"
                className="w-[100px] mb-6 rounded-full border-primary hover:border-primary text-primary hover:text-primary bg-transparent"
            >
                <Plus className="h-4 w-4 mr-1" /> Add
            </Button>

            {/* Save Button */}
            <Button onClick={handleSave} variant={"main"} className="w-full text-white rounded-full h-10">
                Save
            </Button>
        </div>
    )
}
