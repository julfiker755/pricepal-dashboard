"use client"
import ResponsivePagination from 'react-responsive-pagination';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from '@/lib/utils';





export function Pagination({ page,onPageChange, totalPage, per_page,className}) {
    const total = Math.ceil(totalPage / per_page)
    return (
        <div className={cn("lg:w-[320px] flex justify-end", className)}>
            <ResponsivePagination
            previousLabel={<ChevronLeft className="h-4 w-4" />} nextLabel={<ChevronRight className="h-4 w-4" />}
            className="flex flex-row gap-1 w-fit"
            pageItemClassName="h-10 border rounded-full w-10 flex items-center justify-center whitespace-nowrap  text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            pageLinkClassName="h-10 w-10 flex items-center justify-center rounded-full"
            activeItemClassName="bg-primary [.admin_&]:bg-primary1 border text-white hover:bg-primary hover:text-white rounded-full"
            disabledItemClassName="hover:!bg-transparent"
            current={page}
            total={total}
            onPageChange={onPageChange}
        />
        </div>
    )
}