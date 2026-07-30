import {
  ChartNoAxesCombined,
  Receipt,
  Users,
  CircleHelp,
  CalendarDays,
  Megaphone,
  Settings,
  Home,
  Wallet,
  Scroll
} from "lucide-react";
import { MODULE_URLS,DASHBOARD_ROUTES,EVENT_ROUTES,MARKETING_ROUTES,REFERAL_REWARD_ROUTES,FINANCE_ROUTES,USER_ROUTES,ORDER_ROUTES } from "./../config/moduleUrls.js";

export const adminSidebarMenuItems = [
  {
    id: "home",
    label: "Home",
    path: DASHBOARD_ROUTES.HOME,
    icon: Home,
    permissions: ["home.view"],
  },
  {
    id: "analytics",
    label: "Dashboard",
    path: DASHBOARD_ROUTES.ANALYTICS,
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
        path: EVENT_ROUTES.CREATE_EVENT,
        permissions: ["event.create"]
      },
      {
        id: "eventlist",
        label: "Event List",
        path: EVENT_ROUTES.EVENTS,
        permissions: ["event.view"]
      },
      {
        id: "categories",
        label: "Categories",
        path: EVENT_ROUTES.CATEGORIES,
        permissions: ["event.view"]
      },
      {
        id: "vendors",
        label: "Vendors",
        path: EVENT_ROUTES.VENDORS,
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
        path: ORDER_ROUTES.ORDERS,
        permissions: ["order.view"]
      },
      {
        id: "cacelationreq",
        label: "Cancelation Requests",
        path: ORDER_ROUTES.ORDER_CANCELATION_REQ,
        permissions: ["event.view"]
      },
      {
        id: "cacelationreq",
        label: "Approved Requests",
        path: ORDER_ROUTES.ORDER_SUPPORT_CANCELATION_REQ,
        permissions: ["event.view"]
      },
      {
        id: "swapreq",
        label: "Swap Requests",
        path: ORDER_ROUTES.ORDER_SWAP_REQ_LIST,
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
        path: USER_ROUTES.USERS,
        permissions: ["user.view"]
      },
      { id: "staffs", label: "Staff", path: USER_ROUTES.STAFF, permissions: ["staff.view"] },
      { id: "roles", label: "Roles", path: USER_ROUTES.ROLES, permissions: ["role.view"] },
      { id: "organizations", label: "Organizations", path: USER_ROUTES.ORGANIZATION, permissions: ["organization.view"] },
     
      
    ],
  },
  {
    id: "finance",
    label: "Finance",
    icon: Scroll,
    path: FINANCE_ROUTES.FINANCE,
    permissions: ["setting.manage"],
   
  },
  // {
  //   id: "setting",
  //   label: "Setting",
  //   icon: Settings,
  //   permissions: ["setting.manage"],
   
  // },
  {
    id: "referal_reward",
    label: "Referral & Reward",
    
    icon: Wallet,
    permissions: ["marketing.view"],
     submenus: [
      {
        id: "partners",
        label: "Partners",
        path: REFERAL_REWARD_ROUTES.PARTNERS,
        permissions: ["user.view"]
      },
      {
        id: "rewards",
        label: "Rewards/Cashback",
        path: REFERAL_REWARD_ROUTES.REWARDS,
        permissions: ["event.view"]
      },
      {
        id: "referal",
        label: "Referal/Promoter",
        path: REFERAL_REWARD_ROUTES.REFERAL_PROMOTER,
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
        label: "Create Facebook Ad Campaign",
        path: MARKETING_ROUTES.FACEBOOK,
        permissions: ["event.create"]
      },
      {
        id: "facebook",
        label: "Facebook Ad Campaigns",
        path: MARKETING_ROUTES.FACEBOOK_ADS,
        permissions: ["event.create"]
      },
      {
        id: "email",
        label: "Email Marketing",
        path: MARKETING_ROUTES.EMAIL,
        permissions: ["event.view"]
      },
      {
        id: "sms",
        label: "SMS Marketing",
        path: MARKETING_ROUTES.SMS,
        permissions: ["event.view"]
      },
      
    ],
  },
  {
    id: "helpcenter",
    label: "Help Center",
    path: DASHBOARD_ROUTES.HELP,
    icon: CircleHelp,
    permissions: ["help.view"],
  },
];