import React, { useState } from 'react'
import DroupDownSelect from '@/components/reuseable/droupdown'
import { Input } from '@/components/ui/input'
import { PlaceholderImg } from '@/lib/utils'
import Image from 'next/image'
import { DeleteService } from '@/components/reuseable/Icon-button'
import { inputOptions } from '@/components/dummy-data'



export default function PageHeader({ page_label, page_type, page_title, imgUrl,id,PageRemove,hanldeChange }) {
  // const [type, setType] = useState('input')
  return (
    <div>
      <div className="flex items-center justify-between pb-1 border-gray-200">
        <h1 className="text-xl font-semibold">{page_title}</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Page type:</span>
          <DroupDownSelect
            options={inputOptions}
            defaultValue={page_type}
            placeholder="Choose Type"
            className="w-[120px]"
            onChange={(value) =>{
              hanldeChange(id,value)
              // setType(value)
            }}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 py-4">
          <Input placeholder="Size of your house" value={page_label} className="flex-1 rounded-full text-center py-5"  readOnly/>
          <div className="relative w-12 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={imgUrl ? (imgUrl) : (PlaceholderImg())}
              alt="Placeholder image"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <DeleteService onClick={()=>PageRemove(id)} />
        </div>
      </div>
    </div>
  )
}
