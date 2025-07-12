
const statusStyle = {
    Available:"bg-primary text-white",
    NotAvailable: "bg-gray-500 text-white",
    Completed: "bg-primary text-white",
    Progress: "bg-[#00AAFF] text-white",
    Pending: "bg-[#00AAFF] text-white"
};



export const StatusBadge = ({ status }) => {
    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusStyle[status] || "bg-gray-200 text-black"}`}
        >
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            {status}
        </span>
    );
};

// Completed

const statusStyles = {
    Pending: "bg-[#007AFF] text-white",
    Completed: "bg-[#6DA40A] text-white",
    Ongoing: "bg-[#8C63DA] text-white",
};

export default function OrderBadge({ status }) {
    return (
        <div
            className={`flex items-center gap-2 rounded-md px-4 py-2 w-fit ${statusStyles[status] || "bg-gray-200 text-black"}`}
        >
            <span className="w-4 h-4 rounded-full bg-white" />
            <span className="capitalize">{status}</span>
        </div>
    );
}