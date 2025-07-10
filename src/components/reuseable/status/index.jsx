

export const StatusBadge = ({ status }) => {
    const isInProgress = status === "Not Available";
    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${isInProgress ? "bg-gray-500 text-white" : "bg-primary text-white"
                }`}
        >
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            {status}
        </span>
    );
};



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