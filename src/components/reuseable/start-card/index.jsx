

import React from 'react'

export default function StartCard({ title, value, Icon }) {
    return (
        <div className="flex justify-between items-center rounded-2xl border border-[#00000033] bg-white px-6 pb-8 shadow-sm">
            <div className='mt-14'>
                <p className="text-3xl text-gray-800">{title}</p>
                <h2 className="text-4xl font-semibold text-black mt-1">{value}</h2>
            </div>
            <div className="rounded-full bg-[#F3FFDD] p-4">
                <Icon className="text-[#6DA40A] w-9 h-9" />
            </div>
        </div>
    )
}
