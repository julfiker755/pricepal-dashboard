"use client"
import React, { useRef, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import DroupDownSelect from '@/components/reuseable/droupdown'
import { inputOptions } from '@/components/dummy-data'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ImageIcon } from 'lucide-react'


export default function AddPage({ AddMorePage }) {
    const fileInputRef = useRef(null)
    const [imageData, setImageData] = useState({
        file: null,
        preview: null,
    })
    const [formData, setFormData] = useState({
        pageName: "",
        fieldName: "",
        fieldType: "",
        fieldPrice: "",
        pageType: ""
    })

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleImageChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const preview = URL.createObjectURL(file)
            setImageData({ file, preview })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            ...formData,
            imageFile: imageData.file,
            imagePreview: imageData.preview,
        }
        AddMorePage(payload)
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-6">
            <DroupDownSelect
                options={inputOptions}
                placeholder="Choose Type"
                className="w-full rounded-full"
                onChange={(value) => handleChange("pageType", value)}
            />

            {/* Page Name + Image Upload */}
            <div>
                <Label htmlFor="page-name" className="text-sm mb-1">Page Name:</Label>
                <div className="flex items-center gap-1">
                    <Input
                        id="page-name"
                        placeholder="Type here"
                        value={formData.pageName}
                        onChange={(e) => handleChange("pageName", e.target.value)}
                        className="border flex-1 border-input bg-background px-3 py-2 text-sm shadow-none rounded-full"
                        required
                    />

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />

                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="rounded-full border border-input bg-background shadow-sm"
                        onClick={handleImageClick}
                    >
                        {imageData.preview ? (
                            <img className="h-5 w-5 rounded-sm" src={imageData.preview} alt="ffdf" />
                        ) : (
                            <ImageIcon className="h-5 w-5 text-gray-500" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Field Info */}
            <div className="flex gap-2">
                <div className="w-full">
                    <Label htmlFor="field-name" className="text-sm mb-1">Field Name</Label>
                    <Input
                        id="field-name"
                        placeholder="Field name"
                        value={formData.fieldName}
                        onChange={(e) => handleChange("fieldName", e.target.value)}
                        className="border border-input bg-background px-3 py-2 text-sm shadow-none rounded-full"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="field-type" className="text-sm mb-1">Field Type</Label>
                    <Select
                        onValueChange={(value) => handleChange("fieldType", value)}
                    >
                        <SelectTrigger className="border border-input bg-background px-3 w-[100px] py-2 text-sm shadow-none rounded-full">
                            <SelectValue placeholder="-select-" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="text">Text</SelectItem>
                            <SelectItem value="number">Number</SelectItem>
                            <SelectItem value="date">Date</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-[200px]">
                    <Label htmlFor="price" className="text-sm mb-1">Price</Label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input
                            id="price"
                            placeholder="00.00"
                            value={formData.fieldPrice}
                            onChange={(e) => handleChange("fieldPrice", e.target.value)}
                            className="border border-input bg-background pl-8 py-2 text-sm shadow-none rounded-full"
                            required
                        />
                    </div>
                </div>
            </div>

            <Button type="submit" variant="main" className="rounded-full">
                Save
            </Button>
        </form>
    )
}
