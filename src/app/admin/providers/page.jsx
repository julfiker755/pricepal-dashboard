"use client"
import AddProvider from '@/components/common/admin/add-provider'
import Modal from '@/components/reuseable/modal'
import NavTitle from '@/components/reuseable/nav-title'
import ProviderCard from '@/components/reuseable/provider-card'
import SearchBox from '@/components/reuseable/start-card/search-box'
import { Button } from '@/components/ui/button'
import { Funnel, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function Providers() {
  const [isFilter, setIsFilter] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  return (
    <div>
      <NavTitle title={"Manage providers"} subTitle={"You can manage all of your services from here."}></NavTitle>
      <ul className="flex items-center flex-wrap justify-between pb-8">
        <li className="w-full lg:w-[400px] mb-3 md:mb-0">
          <SearchBox />
        </li>
        <li className="flex gap-4">
          <Button onClick={() => setIsAdd(!isAdd)} className="bg-primary rounded-sm h-full w-fit py-[10px] hover:bg-primary cursor-pointer">
            <Plus size={18} className="mr-1" />
            Add provider
          </Button>
          <div className="relative">
            <Button
              onClick={() => setIsFilter(!isFilter)}
              variant="outline"
              className="bg-transparent rounded-sm h-full py-[8px] text-black1 shadow-none cursor-pointer border border-gray-400 relative"
            >
              <Funnel size={18} className="mr-1" />
              Filter
            </Button>
            {isFilter && (
              <div className="absolute right-0 mt-2 top-8 bg-white rounded-lg shadow-lg border w-[150px] border-gray-200 z-10">
                {["Both", "Available", "Not Available"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setIsFilter(false)}
                    className="block w-full border-b-2 text-center px-6 py-2 text-gray-800 hover:bg-gray-100 transition cursor-pointer"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

        </li>
      </ul>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
      </div>
      {/* Add Provider */}
      <Modal open={isAdd} setIsOpen={setIsAdd} className={"p-2"}>
         <AddProvider/>
      </Modal>
    </div>
  )
}
