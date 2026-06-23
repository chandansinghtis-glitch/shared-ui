import {
  ChartNoAxesCombined,
  Receipt,
  Users,
  CircleHelp,
  CalendarDays,
  Megaphone,
  Settings,
  Home,
  Wallet
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
        label: "Create Event",
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
      },
      {
        id: "vendors",
        label: "Vendors",
        path: `${MODULE_URLS.EVENT}/admin/addon-vendors`,
        permissions: ["vendor.view"]
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
     
      
    ],
  },
  {
    id: "setting",
    label: "Setting",
    icon: Settings,
    permissions: ["setting.manage"],
   
  },
  {
    id: "referal_reward",
    label: "Referral & Reward",
    
    icon: Wallet,
    permissions: ["marketing.view"],
     submenus: [
      {
        id: "partners",
        label: "Partners",
        path: `${MODULE_URLS.REWARD}/admin/partners`,
        permissions: ["event.create"]
      },
      {
        id: "rewards",
        label: "Rewards/Cashback",
        path: `${MODULE_URLS.REWARD}/admin/rewards`,
        permissions: ["event.view"]
      },
      {
        id: "referal",
        label: "Referal/Promoter",
        path: `${MODULE_URLS.REWARD}/admin/referal-promoter-center`,
        permissions: ["event.view"]
      },
      
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    
    icon: Megaphone,
    permissions: ["marketing.view"],
     submenus: [
      {
        id: "facebook",
        label: "Facebook Marketing",
        path: `${MODULE_URLS.MARKETING}/admin/partners`,
        permissions: ["event.create"]
      },
      {
        id: "email",
        label: "Email Marketing",
        path: `${MODULE_URLS.MARKETING}/admin/rewards`,
        permissions: ["event.view"]
      },
      {
        id: "sms",
        label: "SMS Marketing",
        path: `${MODULE_URLS.MARKETING}/admin/referal-promoter-center`,
        permissions: ["event.view"]
      },
      
    ],
  },
  {
    id: "helpcenter",
    label: "Help Center",
    path: `${MODULE_URLS.DASHBOARD}/admin/help-center`,
    icon: CircleHelp,
    permissions: ["help.view"],
  },
];