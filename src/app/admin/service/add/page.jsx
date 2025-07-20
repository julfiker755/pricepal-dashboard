"use client"
import React, { useState, useEffect } from 'react'
import NavTitle from '@/components/reuseable/nav-title'
import PageHeader from '@/components/common/service/page-header'
import Modal from '@/components/reuseable/modal'
import Addpage from '@/components/common/service/add-page'
import { FieldRow } from '@/components/reuseable/field-row'
import { AddFieldDialog } from '@/components/reuseable/add-field-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUpRight, Plus } from 'lucide-react'
import { DeleteService } from '@/components/reuseable/Icon-button'
import CreateAction from '@/components/common/service/create-action'
import CreateSelection from '@/components/common/service/add-selection'
import { Calenderbox } from '@/components/common/service/calender-box'


export default function ServiceAdd() {
  const [isPageModalOpen, setIsPageModalOpen] = useState(false)
  const [isButton, setIsButton] = useState(false)
  const [isSelection, setIsSelection] = useState(false)
  const [serviceName, setServiceName] = useState("")
  const [pages, setPages] = useState([
    // {
    //   id: 1,
    //   page_title: "Page 1",
    //   page_type: "selection",
    //   page_label: "Size of your house",
    //   img: "",
    //   fields: [
    //     { id: "1", name: "Less than 1000 sq ft", type: "text", price: "$100.00" },
    //     { id: "2", name: "1000 - 3000 sq ft", type: "text", price: "$200.00" },
    //     { id: "3", name: "More than 3000 sq ft", type: "text", price: "$400.00" },
    //   ],
    // },
  ])

  // --- Debug ---
  useEffect(() => {
    console.log("Updated pages:", pages)
  }, [pages])

  const handleAddPage = (data) => {
    const nextId = pages.length + 1
    const newPage = {
      id: nextId,
      page_title: `Page ${nextId}`,
      page_type: data.pageType,
      page_label: data.pageName,
      img: data.imageFile,
      imgUrl: data.imagePreview,
      fields: [
        {
          id: String(Date.now()),
          name: data.fieldName,
          type: data.fieldType,
          price: data.fieldprice,
        },
      ],
    }
    setPages((prev) => [...prev, newPage])
    setIsPageModalOpen(false)
  }

  const handleRemovePage = (id) => {
    setPages((prev) => prev.filter((page) => page.id !== id))
  }

  const handleAddField = (pageId, newField) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === pageId
          ? { ...page, fields: [...page.fields, { id: String(Date.now()), ...newField }] }
          : page
      )
    )
  }

  const handleUpdateField = (pageId, fieldId, key, value) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === pageId
          ? {
              ...page,
              fields: page.fields.map((field) =>
                field.id === fieldId ? { ...field, [key]: value } : field
              ),
            }
          : page
      )
    )
  }

  const handleDeleteField = (pageId, fieldId) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === pageId
          ? { ...page, fields: page.fields.filter((field) => field.id !== fieldId) }
          : page
      )
    )
  }

  const hanldeCreateAction = (item) => {
    console.log(item)
    setIsButton(false)
  }

  const hanldeChange = (pageId, newType) => {
    console.log(newType)
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === pageId ? { ...page, page_type: newType } : page
      )
    )
  }

  const renderPageContent = (page) => {
    console.log(page?.page_type)
    switch (page.page_type) {
      case "input":
        return (
          <div className="border rounded-md p-3">
            <div className="space-y-4">
              <div className="grid grid-cols-[2fr_1fr_1fr_auto] items-center gap-2 rounded-lg">
                <div className="contents font-semibold text-sm text-gray-600">
                  <div className='ml-2'>Field name</div>
                  <div className='ml-2'>Field type</div>
                  <div className='ml-2'>Price</div>
                  <div className='opacity-0'>Action</div>
                </div>

                {page.fields.map((field) => (
                  <FieldRow
                    key={field.id}
                    fieldName={field.name}
                    fieldType={field.type}
                    price={field.price}
                    onFieldNameChange={(val) => handleUpdateField(page.id, field.id, "name", val)}
                    onFieldTypeChange={(val) => handleUpdateField(page.id, field.id, "type", val)}
                    onPriceChange={(val) => handleUpdateField(page.id, field.id, "price", val)}
                    onDelete={() => handleDeleteField(page.id, field.id)}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <AddFieldDialog onSave={(field) => handleAddField(page.id, field)}>
                <Button variant="main" className="rounded-full">
                  <Plus className="h-4 w-4 mr-1" />
                  Add field
                </Button>
              </AddFieldDialog>

              <Button className="bg-gray-600 text-white hover:bg-gray-700 shadow-md px-6 py-2 rounded-full">
                Save changes
              </Button>
            </div>
          </div>
        )

      case "button":
        return (
          <div className='border p-3 rounded-xl'>
            <div className='flex items-center gap-3 rounded-md'>
              <div className="w-full">
                <label className="text-sm font-medium">Button Text</label>
                <div className='bg-transparent text-black border hover:bg-transparent rounded-full w-full text-left mt-2 py-[6px] px-3 text-sm'>+ Add</div>
                {/* <Button className="bg-transparent text-black border hover:bg-transparent rounded-full w-full text-left mt-2">+ Add</Button> */}
              </div>
              <div className="grid gap-2 w-[300px]">
                <label className="text-sm font-medium text-gray-700">Action</label>
                <div className="flex items-center gap-2">
                  <Button variant="main" onClick={() => setIsButton(true)} className="rounded-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Create action
                  </Button>
                  <Button variant="outline" size="icon" className="w-10 h-10 border-gray-300 rounded-full">
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                  <DeleteService />
                </div>
              </div>
            </div>

            <div className='flex justify-end mt-8'>
              <Button className="bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-full">Save changes</Button>
            </div>
          </div>
        )

      case "selection":
        return (
          <div className='border p-3 rounded-xl'>
            <div className='flex items-center gap-3 rounded-md'>
              <div className="w-full">
                <label className="text-sm font-medium">Field name</label>
                  <div className='bg-transparent text-black border hover:bg-transparent rounded-full w-full text-left mt-2 py-[6px] px-3 text-sm'>Field text</div>
                {/* <Button className="bg-transparent text-black border hover:bg-transparent rounded-full w-full text-left mt-2">Field text</Button> */}
              </div>
              <div className="grid gap-2 w-[170px]">
                <label className="text-sm font-medium text-gray-700">Action</label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-20 h-9 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent rounded-full"
                    onClick={() => setIsSelection(true)}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Button>
                  <DeleteService />
                </div>
              </div>
            </div>

            <div className='flex justify-end mt-8'>
              <Button className="bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-full">Save changes</Button>
            </div>
          </div>
        )
       case "date": 
       return (
         <Calenderbox/>
       )
      default:
        return null
    }
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <NavTitle title="Add new services" subTitle="You can manage all of your services from here." />

      <div className='flex flex-wrap lg:flex-nowrap items-center gap-4'>
        <h1 className='text-base lg:text-xl font-medium text-black whitespace-nowrap'>Service Name:</h1>
        <Input
          className="flex-1 min-w-0 rounded-full"
          placeholder="Service here"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
        <Button variant="main" className="rounded-lg px-8 whitespace-nowrap">Save</Button>
      </div>
      {pages?.length > 0 && pages.map((page) => (
          <div key={page.id} className='py-10'>
            <PageHeader {...page} PageRemove={handleRemovePage} hanldeChange={hanldeChange} />
            {renderPageContent(page)}
          </div>
        ))}

      <div className='flex justify-center'>
        <Button onClick={() => setIsPageModalOpen(true)} variant="main" className="rounded-full mt-5">
          <Plus className="mr-1" />
          Add More
        </Button>
      </div>

      {/* Modals */}
      <Modal open={isPageModalOpen} setIsOpen={setIsPageModalOpen} className="sm:max-w-[500px]">
        <h1 className="text-lg font-semibold mb-3">Add new field</h1>
        <Addpage AddMorePage={handleAddPage} />
      </Modal>

      <Modal open={isButton} setIsOpen={setIsButton} className="sm:max-w-[500px]">
        <h1 className="text-lg font-semibold mb-3">Create action</h1>
        <CreateAction hanldeCreateAction={hanldeCreateAction} />
      </Modal>

      <Modal open={isSelection} setIsOpen={setIsSelection} className="sm:max-w-[800px]">
        <h1 className="text-lg font-semibold mb-3">Create Selection</h1>
        <CreateSelection />
      </Modal>
    </div>
  )
}
