import { Calendar, Clock, Mail } from "lucide-react";

const notifications = [
  {
    type: "appointment",
    title: "New Appointment",
    description: "An user booked an appointment.",
    date: "05-04-2025",
    time: "05:50 PM",
    color: "border-l-orange-500",
  },
  {
    type: "feedback",
    title: "New Feedback",
    description: "An user left a feedback.",
    date: "05-04-2025",
    time: "05:50 PM",
    color: "border-l-blue-500",
  },
  {
    type: "appointment",
    title: "New Appointment",
    description: "An user booked an appointment.",
    date: "05-04-2025",
    time: "05:50 PM",
    color: "border-l-orange-500",
  },
  {
    type: "feedback",
    title: "New Feedback",
    description: "An user left a feedback.",
    date: "05-04-2025",
    time: "05:50 PM",
    color: "border-l-blue-500",
  },
];

export default function Component() {
  return (
    <div className="bg-gray-50 p-4 space-y-4 w-full">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`bg-white border-l-4 ${notification.color} p-4 flex flex-col md:flex-row md:items-center md:justify-between shadow-sm rounded-lg`}
        >
          <div className="mb-2 md:mb-0">
            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
            <p className="text-gray-600 text-sm">
              {notification.description}{" "}
              <span className="text-blue-500 cursor-pointer">Tap to view</span>
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{notification.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{notification.time}</span>
            </div>
            <div className="text-gray-500">
              <Mail className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
