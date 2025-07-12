import {
  LayoutDashboard,
  UsersRound,
  Settings,
  UserRound,
  KeyRound,
  MessageSquare,
  ThumbsUp,
  Dock,
  Wrench,
  CircleAlert,
  Gavel,
  ShieldAlert,
  House,
} from "lucide-react";

export const companyLinks = [
  { to: "/company", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/company/settings", icon: Dock, label: "Company Settings" },
  { to: "/company/providers", icon: House, label: "Service providers" },
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

// adminLinks
export const adminLinks = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/users", icon: UserRound, label: "Users" },
  { to: "/admin/bookings", icon: Dock, label: "Bookings" },
  { to: "/admin/service", icon: Wrench, label: "Service" },
  { to: "/admin/providers", icon:House , label: "Providers" },
  {
    icon: Settings,
    label: "Settings",
    submenu: [
      { to: "/admin/change-password", icon: KeyRound, label: "Change Password" },
      { to: "/admin/privacy", icon:ShieldAlert, label: "Privacy  Policy" },
      { to: "/admin/about-us", icon:CircleAlert, label: "About us" },
      { to: "/admin/tarms", icon:Gavel, label: "Terms & Conditions" }
    ],
  },
];

