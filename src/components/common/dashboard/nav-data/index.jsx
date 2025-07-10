import {
  LayoutDashboard,
  UsersRound,
  Settings,
  Calendar,
  UserRound,
  KeyRound,
  CircleAlert,
  CircleQuestionMark,
} from "lucide-react";

export const serviceLinks = [
  { to: "/company", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/company/providers", icon: UsersRound, label: "Service providers" },
  { to: "/company/orders", icon: UserRound, label: "Orders" },
  { to: "/company/transactions", icon: Calendar, label: "Transactions" },
  {
    icon: Settings,
    label: "Settings",
    submenu: [
      { to: "/company/change-password", icon: KeyRound, label: "Change Password" },
      { to: "/company/about-us", icon: CircleAlert, label: "About Us" },
      { to: "/company/fqa", icon: CircleQuestionMark, label: "FAQ" }
    ],
  },
];
