import React from 'react'

export default function StartCard({ title, value, Icon }) {
    return (
        <div className="flex justify-between items-center rounded-2xl border border-[#00000033] bg-white px-6  py-10 shadow-sm">
            <div>
                <p className="text-2xl text-gray-800">{title}</p>
                <h2 className="text-4xl font-semibold text-black mt-1">{value}</h2>
            </div>
            <div className="rounded-full bg-[#F3FFDD] [.admin_&]:bg-primary1/30 p-4">
                <Icon className="text-primary  [.admin_&]:text-primary1 w-9 h-9" />
            </div>
        </div>
    )
}
