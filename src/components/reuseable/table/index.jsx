import {
    Table as TableArea,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";


export const Table = ({
    className,
    headers = [],
    children
}) => {
    return (
        <div className={cn("mt-4", className)}>
            <div>
                <TableArea>
                    {headers && headers.length > 0 && (
                        <TableHeader>
                            <TableRow className="text-base  font-semibold text-center  text-black border-2 border-[#F6F6F6]">
                                {headers?.map((header, index) => (
                                    <TableHead
                                        key={index}
                                        
                                    >
                                        <h1 className="w-max capitalize font-semibold">{header}</h1>
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                    )}
                    <TableBody>{children}</TableBody>
                </TableArea>
            </div>
        </div>
    );
};

