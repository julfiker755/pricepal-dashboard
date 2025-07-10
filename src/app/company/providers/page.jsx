"use client"
import useConfirmation from '@/components/reuseable/delete-modal'
import { Pagination } from '@/components/reuseable/pagination'
import SearchBox from '@/components/reuseable/start-card/search-box'
import { StatusBadge } from '@/components/reuseable/status'
import { Table } from '@/components/reuseable/table'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { PlaceholderImg } from '@/lib/utils'
import { Eye, Funnel, Plus, Trash} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ServiceProviders() {
    const { confirm } = useConfirmation();
    const headers = ["User", "Email", "Type", "Status", "Action"];

    const tableData = [
        {
            "id": 1,
            "name": "Md. Abid",
            "img": PlaceholderImg(),
            "email": "abid.hossain@example.com",
            "type": "Cleaner",
            "status": "Available"
        },
        {
            "id": 2,
            "name": "Salma Akter",
            "img": PlaceholderImg(),
            "email": "salma.akter@example.com",
            "type": "Cleaner",
            "status": "Available"
        },
        {
            "id": 3,
            "name": "Rahim Uddin",
            "img": "/images/cleaner3.jpg",
            "email": "rahim.uddin@example.com",
            "type": "Cleaner",
            "status": "Available"
        },
        {
            "id": 4,
            "name": "Nusrat Jahan",
            "img": "/images/cleaner4.jpg",
            "email": "nusrat.jahan@example.com",
            "type": "Cleaner",
            "status": "Available"
        },
        {
            "id": 5,
            "name": "Sakib Khan",
            "img": "/images/cleaner5.jpg",
            "email": "sakib.khan@example.com",
            "type": "Cleaner",
            "status": "Available"
        },
        {
            "id": 6,
            "name": "Rima Sultana",
            "img": "/images/cleaner6.jpg",
            "email": "rima.sultana@example.com",
            "type": "Cleaner",
            "status": "Available"
        },
        {
            "id": 7,
            "name": "Jamal Hossain",
            "img": "/images/cleaner7.jpg",
            "email": "jamal.hossain@example.com",
            "type": "Cleaner",
            "status": "Not Available"
        },
        {
            "id": 7,
            "name": "Jamal Hossain",
            "img": "/images/cleaner7.jpg",
            "email": "jamal.hossain@example.com",
            "type": "Cleaner",
            "status": "Not Available"
        }
    ]

    const handleDelete = async (id) => {
        const confirmed = await confirm();
        if (confirmed) {
            console.log(id)
        }
    }

    return (
        <div>
            <ul className="flex items-center flex-wrap justify-between pb-8">
                <li className="w-full lg:w-[400px] mb-3 md:mb-0">
                    < SearchBox />
                </li>
                <li className='flex gap-4'>
                    <Button className="bg-primary rounded-sm h-full w-fit py-[10px] hover:bg-primary cursor-pointer">
                        <Plus size={18} className="mr-1" />
                        Add provider
                    </Button>
                    <Button className="bg-transparent rounded-sm h-full py-[8px] text-black1 shadow-none cursor-pointer border border-gray-400">
                        <Funnel size={18} className="mr-1" />
                        Filter
                    </Button>
                </li>
            </ul>
            <div>
                <Table headers={headers}>
                    {tableData.map((item, index) => (
                        <TableRow key={index} className="[&>td]:bg-white [&>td]:py-2 [&>td]:rounded-md  border-b-18 border-[#F6F6F6]">
                            <TableCell className="relative">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                        <Image
                                            src={PlaceholderImg()}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">{item.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell><StatusBadge status={item?.status} /></TableCell>
                            <TableCell className="flex gap-2">
                                <div className="flex justify-center gap-2">
                                    <button
                                        className="px-2 py-2 text-xs border border-none bg-[#F2FFDA] rounded-lg cursor-pointer"
                                    >
                                        <Eye className="text-[#6DA40A]" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete()}
                                        className="px-2 py-2 text-xs border border-none text-[#FF5353] bg-[#FFE8E8] rounded-lg cursor-pointer"
                                    >
                                        <Trash />
                                    </button>
                                </div>
                            </TableCell>

                        </TableRow>
                    ))}
                </Table>
                {/* pagination */}
                <ul className="flex flex-wrap justify-end my-7">
                    <li className="font-medium">
                        <Pagination page={1} onPageChange={() => { }} totalPage={10} per_page={2}></Pagination>
                    </li>
                </ul>
            </div>
        </div>
    )
}
