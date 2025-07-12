import {
  LayoutDashboard,
  UsersRound,
  Settings,
  Calendar,
  UserRound,
  KeyRound,
  CircleAlert,
  CircleQuestionMark,
  MessageSquare,
  ThumbsUp,
  Dock,
} from "lucide-react";

export const serviceLinks = [
  { to: "/company", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/company/settings", icon: Dock, label: "Company Settings" },
  { to: "/company/providers", icon: UsersRound, label: "Service providers" },
  { to: "/company/orders", icon: UserRound, label: "Orders" },
  { to: "/company/chats", icon: MessageSquare, label: "Chats" },
  { to: "/company/feedbacks", icon:ThumbsUp, label: "Feedbacks" },
  {
    icon: Settings,
    label: "Settings",
    submenu: [
      { to: "/company/change-password", icon: KeyRound, label: "Change Password" },
    ],
  },
];
