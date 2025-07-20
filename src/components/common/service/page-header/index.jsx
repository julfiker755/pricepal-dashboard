import React, { useState } from 'react'
import DroupDownSelect from '@/components/reuseable/droupdown'
import { Input } from '@/components/ui/input'
import { PlaceholderImg } from '@/lib/utils'
import Image from 'next/image'
import { DeleteService } from '@/components/reuseable/Icon-button'

const inputOptions = [
  { label: 'Input', value: 'input' },
  { label: 'button', value: 'button' },
  { label: 'Selection', value: 'selection' },
  { label: 'Date', value: 'date' },
  { label: 'Time', value: 'time' },
]

export default function PageHeader() {
  const [type, setType] = useState('input')

  return (
    <div>
      <div className="flex items-center justify-between pb-1 border-gray-200">
        <h1 className="text-xl font-semibold">Page 1</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Page type:</span>
          <DroupDownSelect
            options={inputOptions}
            defaultValue="input"
            placeholder="Choose Type"
            className="w-[120px]"
            onChange={(value) => setType(value)} 
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 py-4">
          <Input placeholder="Size of your house" className="flex-1 rounded-full text-center py-5" />
          <div className="relative w-12 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={PlaceholderImg()}
              alt="Placeholder image"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <DeleteService />
        </div>
      </div>
    </div>
  )
}
