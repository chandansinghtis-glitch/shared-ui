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
import { MODULE_URLS } from "./../config/moduleUrls.js";

export const adminSidebarMenuItems = [
  {
    id: "home",
    label: "Home",
    path: `${MODULE_URLS.DASHBOARD}/admin/home`,
    icon: Home,
    permissions: ["home.view"],
  },
  {
    id: "analytics",
    label: "Dashboard",
    path: `${MODULE_URLS.DASHBOARD}/admin/dashboard`,
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
        path: `${MODULE_URLS.EVENT}/admin/eventcreate`,
        permissions: ["event.create"]
      },
      {
        id: "eventlist",
        label: "Event List",
        path: `${MODULE_URLS.EVENT}/admin/events`,
        permissions: ["event.view"]
      },
      {
        id: "categories",
        label: "Categories",
        path: `${MODULE_URLS.EVENT}/admin/event-cats`,
        permissions: ["event.view"]
      }
    ],
  },
  {
    id: "orders",
    label: "Orders",
    icon: Receipt,
    permissions: ["order.view"],
    submenus: [
      {
        id: "orderslist",
        label: "All Orders",
        path: `${MODULE_URLS.ORDER}/admin/orders`,
        permissions: ["order.view"]
      },
      {
        id: "cacelationreq",
        label: "Cancelation Requests",
        path: `${MODULE_URLS.ORDER}/admin/cacellation-requests`,
        permissions: ["event.view"]
      },
      {
        id: "cacelationreq",
        label: "Approved Requests",
        path: `${MODULE_URLS.ORDER}/admin/support-cacellation-requests`,
        permissions: ["event.view"]
      },
      {
        id: "swapreq",
        label: "Swap Requests",
        path: `${MODULE_URLS.EVENT}/admin/swap-requests-list`,
        permissions: ["event.view"]
      },
    ],
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
        path: `${MODULE_URLS.USER}/admin/users`,
        permissions: ["user.view"]
      },
      { id: "staffs", label: "Staff", path: `${MODULE_URLS.USER}/admin/staffs`, permissions: ["staff.view"] },
      { id: "roles", label: "Roles", path: `${MODULE_URLS.USER}/admin/roles`, permissions: ["role.view"] },
      { id: "organizations", label: "Organizations", path: `${MODULE_URLS.USER}/admin/organizations`, permissions: ["organization.view"] },
     
      {
        id: "vendors",
        label: "Vendors",
        path: `${MODULE_URLS.USER}/admin/vendors`,
        permissions: ["vendor.view"]
      }
    ],
  },
  {
    id: "setting",
    label: "Setting",
    path: `${MODULE_URLS.EVENT}/admin/setting`,
    icon: Settings,
    permissions: ["setting.manage"],
  },
  {
    id: "marketing",
    label: "Marketing",
    path: `${MODULE_URLS.DASHBOARD}/admin/home`,
    icon: Megaphone,
    permissions: ["marketing.view"],
  },
  {
    id: "helpcenter",
    label: "Help Center",
    path: `${MODULE_URLS.DASHBOARD}/admin/home`,
    icon: CircleHelp,
    permissions: ["help.view"],
  },
];