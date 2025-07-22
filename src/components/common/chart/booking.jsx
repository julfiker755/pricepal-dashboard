"use client";
import { hexToRgba } from "@/lib/utils";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const BookingStatictis = ({color}) => {
    const data = [
        { name: "Sat", value: 20 },
        { name: "Sun", value: 95 },
        { name: "Mon", value: 30 },
        { name: "Tue", value: 15 },
        { name: "Wed", value: 80 },
        { name: "Thu", value: 45 },
        { name: "Fri", value: 85 },
    ];

    return (
        <div className="w-full">
            <h2 className="text-xl font-bold mb-3">Booking Statistics</h2>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm w-full h-[300px] sm:h-[400px] md:h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#84cc16" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#84cc16" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            fill={hexToRgba(color,0.2)}
                            activeDot={{ r: 6, stroke:color, strokeWidth: 2, fill: "white" }}
                            dot={{ stroke:color, strokeWidth: 2, fill: "white", r: 4 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BookingStatictis;
