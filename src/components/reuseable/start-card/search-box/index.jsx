import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBox({className}) {
  return (
    <div className={cn("flex items-center",className)}>
    <input
        type="text"
        className="w-full bg-white pl-2 border-[1px] py-2 text-primary outline-0 placeholder:text-gray-300 placeholder:text-sm"
        placeholder="Search for parents"
    />
    <div className="bg-primary py-3 px-3 rounded-tr-xs rounded-br-xs text-white font-semibold transition-colors cursor-pointer">
        <Search size={17} />
    </div>
</div>
  )
}
