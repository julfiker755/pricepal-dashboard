"use client"
import NavTitle from '@/components/reuseable/nav-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Plus } from "lucide-react"
import { AddFieldDialog } from '@/components/reuseable/add-field-dialog'
import { FieldRow } from '@/components/reuseable/field-row'
import Image from 'next/image'
import { PlaceholderImg } from '@/lib/utils'
import { DeleteService } from '@/components/reuseable/Icon-button'
import DroupDownSelect from '@/components/reuseable/droupdown'
import PageHeader from '@/components/common/service/page-header'


export default function ServiceAdd() {
  const [pages, setPages] = useState([
    {
      page_name:"",
      page_type: "Input",
      mainInputLabel: "Size of your house",
      fields: [
        { id: "1", name: "Less than 1000 sq ft", type: "Option", price: "$100.00" },
        { id: "2", name: "1000 - 3000 sq ft", type: "Option", price: "$200.00" },
        { id: "3", name: "More than 3000 sq ft", type: "Option", price: "$400.00" },
      ],
    },
  ])
  


  const addMorePage = () => {
    const newPageNumber = pages.length + 1
    const newPage = {
      pageNumber: newPageNumber,
      pageTitle: `Page ${newPageNumber}`,
      pageType: "Input",
      mainInputLabel: "New Input Field",
      fields: [], // Start with no fields for a new page
    }
    setPages([...pages, newPage])
  }

  const [fields, setFields] = useState([
    { id: "1", name: "Less than 1000 sq ft", type: "option", price: "100.00" },
    { id: "2", name: "1000 - 3000 sq ft", type: "option", price: "200.00" },
    { id: "3", name: "More than 3000 sq ft", type: "option", price: "400.00" },
  ])

  const handleAddField = (newField) => {
    setFields((prevFields) => [
      ...prevFields,
      { id: String(prevFields.length + 1), ...newField },
    ])
  }

  const handleUpdateField = (id, key, value) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [key]: value } : field
      )
    )
  }

  const handleDeleteField = (id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id))
  }



  return (
    <div className='max-w-6xl mx-auto'>
      <NavTitle title={"Add new services"} subTitle={"You can manage all of your services from here."} />
      <div className='flex flex-wrap lg:flex-nowrap items-center gap-4'>
        <h1 className='text-base lg:text-xl font-medium text-black whitespace-nowrap'>Service Name:</h1>

        <Input className="flex-1 min-w-0 rounded-full" placeholder="Service here" />

        <Button variant="main" className="rounded-lg px-8 whitespace-nowrap">Save</Button>
      </div>
      {/* page 1 */}
      <div className='py-10'>

        <PageHeader />

        <div className="border rounded-md p-3">
          <div className="space-y-4">
            <div className="grid grid-cols-[2fr_1fr_1fr_auto] items-center gap-2 rounded-lg">
              <div className="contents font-semibold text-sm text-gray-600">
                <div className='ml-2'>Field name</div>
                <div className='ml-2'>Field type</div>
                <div className='ml-2'>Price</div>
                <div className='opacity-0'>0</div>
              </div>
              {fields.map((field) => (
                <FieldRow
                  key={field.id}
                  fieldName={field.name}
                  fieldType={field.type}
                  price={field.price}
                  onFieldNameChange={(value) => handleUpdateField(field.id, "name", value)}
                  onFieldTypeChange={(value) => handleUpdateField(field.id, "type", value)}
                  onPriceChange={(value) => handleUpdateField(field.id, "price", value)}
                  onDelete={() => handleDeleteField(field.id)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center pt-4">
            <AddFieldDialog onSave={handleAddField}>
              <Button variant={"main"} className={"rounded-full"}>
                <Plus className="h-4 w-4" />
                Add field
              </Button>
            </AddFieldDialog>
            <Button className="bg-gray-600 text-white hover:bg-gray-700 shadow-md px-6 py-2 rounded-full">
              Save changes
            </Button>
          </div>
        </div>


      </div>
      <Button variant={"main"} className={"rounded-full w-full"}><Plus/>Add More</Button>
    </div>
  )
}
