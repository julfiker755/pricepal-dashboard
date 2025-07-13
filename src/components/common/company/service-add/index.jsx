"use client"
import React, { useState } from 'react'
import Modal from '@/components/reuseable/modal'
import { DeleteService } from '@/components/reuseable/Icon-button'
import { ServiceForm } from './service-from'
import { Button } from "@/components/ui/button"
import { PencilIcon, PlusIcon } from "lucide-react"

export default function ServiceAdd() {
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [editingService, setEditingService] = useState(null)

    // Sample data for services
    const [services, setServices] = useState([
      { id: 1, name: "Cleaning", price: "10.00" },
      { id: 2, name: "Moving", price: "25.00" },
      { id: 3, name: "Remodeling", price: "50.00" },
    ])
  
    const handleAddService = (serviceName, servicePrice) => {
      const newService = { id: services.length + 1, name: serviceName, price: servicePrice }
      setServices([...services, newService])
      setIsAdd(false)
    }
  
    const handleEditService = (serviceName, servicePrice) => {
      if (editingService) {
        setServices(
          services.map((s) =>
            s.name === editingService.name && s.price === editingService.price
              ? { ...s, name: serviceName, price: servicePrice }
              : s,
          ),
        )
      }
      setIsEdit(false)
      setEditingService(null)
    }
  
    const openEditModal = (service) => {
      setEditingService(service)
      setIsEdit(true)
    }
  
    const handleDeleteService = (id) => {
      setServices(services.filter((service) => service.id !== id))
    }
  

  return (
    <div>
    <h3 className="text-lg font-medium text-gray-900 mb-6">
        Services
    </h3>
    <div className="space-y-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-700">{service.name}</span>
              <span className="text-gray-500">Starting: ${service.price}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => openEditModal(service)}
                className="p-2 bg-[#7CB342] hover:bg-[#689F38] cursor-pointer rounded"
                size="icon"
              >
                <PencilIcon className="w-4 h-4 text-white" />
                <span className="sr-only">Edit service</span>
              </Button>
              <DeleteService onClick={() => handleDeleteService(service.id)} />
            </div>
          </div>
        ))}
        <button
          onClick={() => setIsAdd(true)}
          className="flex items-center gap-2 p-3 border-2 border-gray-300 rounded-lg w-full justify-center text-gray-500 cursor-pointer"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Add more</span>
        </button>
      </div>

      {/* Add Service Modal */}
      <Modal open={isAdd} setIsOpen={setIsAdd} className="p-4 max-w-md">
      <h1 className='font-medium flex justify-center '>Add new service</h1>
        <ServiceForm
          title="Add new service"
          onClose={() => setIsAdd(false)}
          onSubmit={handleAddService}
          submitButtonText="Add"
        />
      </Modal>

      {/* Edit Service Modal */}
      <Modal open={isEdit} setIsOpen={setIsEdit} className="p-4 max-w-md">
      <h1 className='font-medium flex justify-center'>Edit Provider</h1>
        {editingService && (
          <ServiceForm
            title="Edit Provider"
            initialService={editingService.name}
            initialPrice={editingService.price}
            onClose={() => setIsEdit(false)}
            onSubmit={handleEditService}
            submitButtonText="Save Changes"
          />
        )}
      </Modal>
</div>
  )
}
