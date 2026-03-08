import {
  ChartNoAxesCombined,
  Receipt,
  Users,
  CircleHelp,
  CalendarDays,
  Megaphone,
  Settings,
  Home
} from "lucide-react";

export const adminSidebarMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/admin/home",
    icon: Home,
    permissions: ["home.view"],
  },
  {
    id: "analytics",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: ChartNoAxesCombined,
    permissions: ["dashboard.view"],
  },
  {
    id: "event",
    label: "Event Module",
    icon: CalendarDays,
    permissions: ["event.view"],
    submenus: [
      {
        id: "eventcreate",
        label: "Event Create",
        path: "/admin/eventcreate",
        permissions: ["event.create"]
      },
      {
        id: "eventlist",
        label: "Event List",
        path: "/admin/events",
        permissions: ["event.view"]
      }
    ],
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: Receipt,
    permissions: ["order.view"],
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
    permissions: ["user.view"],
    submenus: [
      {
        id: "userlist",
        label: "User List",
        path: "/admin/users",
        permissions: ["user.view"]
      },
      {
        id: "vendors",
        label: "Vendors",
        path: "/admin/vendors",
        permissions: ["vendor.view"]
      }
    ],
  },
  {
    id: "setting",
    label: "Setting",
    path: "/admin/setting",
    icon: Settings,
    permissions: ["setting.manage"],
  },
  {
    id: "marketing",
    label: "Marketing",
    path: "/admin/marketing",
    icon: Megaphone,
    permissions: ["marketing.view"],
  },
  {
    id: "helpcenter",
    label: "Help Center",
    path: "/admin/help-center",
    icon: CircleHelp,
    permissions: ["help.view"],
  },
];