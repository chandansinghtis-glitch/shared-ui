import {
  ChartNoAxesCombined,
  Receipt,
  Users,
  CircleHelp,
  CalendarDays,
  Megaphone,
  Home,
  Wallet,
  Scroll,
} from "lucide-react";

import {
  DASHBOARD_ROUTES,
  EVENT_ROUTES,
  ORDER_ROUTES,
  USER_ROUTES,
  FINANCE_ROUTES,
  REFERAL_REWARD_ROUTES,
  MARKETING_ROUTES,
} from "./../config/moduleUrls";

export const adminSidebarMenuItems = [
  // ================= Dashboard =================
  {
    id: "home",
    label: "Home",
    module: "dashboard",
    path: DASHBOARD_ROUTES.HOME,
    icon: Home,
    permissions: ["home.view"],
  },
  {
    id: "analytics",
    label: "Dashboard",
    module: "dashboard",
    path: DASHBOARD_ROUTES.ANALYTICS,
    icon: ChartNoAxesCombined,
    permissions: ["dashboard.view"],
  },

  // ================= Event =================
  {
    id: "event",
    label: "Event Module",
    icon: CalendarDays,
    permissions: ["event.view"],

    submenus: [
      {
        id: "eventlist",
        label: "Event List",
        module: "event",
        path: EVENT_ROUTES.EVENTS,
        permissions: ["event.view"],
      },
      {
        id: "eventcreate",
        label: "Create Event",
        module: "event",
        path: EVENT_ROUTES.CREATE_EVENT,
        permissions: ["event.create"],
      },
      {
        id: "categories",
        label: "Categories",
        module: "event",
        path: EVENT_ROUTES.CATEGORIES,
        permissions: ["event.view"],
      },
      {
        id: "vendors",
        label: "Vendors",
        module: "event",
        path: EVENT_ROUTES.VENDORS,
        permissions: ["vendor.view"],
      },
    ],
  },

  // ================= Orders =================
  {
    id: "orders",
    label: "Orders",
    icon: Receipt,
    permissions: ["order.view"],

    submenus: [
      {
        id: "orderslist",
        label: "All Orders",
        module: "order",
        path: ORDER_ROUTES.ORDERS,
        permissions: ["order.view"],
      },
      {
        id: "cancelationreq",
        label: "Cancelation Requests",
        module: "order",
        path: ORDER_ROUTES.ORDER_CANCELATION_REQ,
        permissions: ["order.view"],
      },
      {
        id: "approvedreq",
        label: "Approved Requests",
        module: "order",
        path: ORDER_ROUTES.ORDER_SUPPORT_CANCELATION_REQ,
        permissions: ["order.view"],
      },
      {
        id: "swapreq",
        label: "Swap Requests",
        module: "order",
        path: ORDER_ROUTES.ORDER_SWAP_REQ_LIST,
        permissions: ["order.view"],
      },
    ],
  },

  // ================= Users =================
  {
    id: "users",
    label: "Users",
    icon: Users,
    permissions: ["user.view"],

    submenus: [
      {
        id: "userlist",
        label: "User List",
        module: "user",
        path: USER_ROUTES.USERS,
        permissions: ["user.view"],
      },
      {
        id: "staffs",
        label: "Staff",
        module: "user",
        path: USER_ROUTES.STAFF,
        permissions: ["staff.view"],
      },
      {
        id: "roles",
        label: "Roles",
        module: "user",
        path: USER_ROUTES.ROLES,
        permissions: ["role.view"],
      },
      {
        id: "organizations",
        label: "Organizations",
        module: "user",
        path: USER_ROUTES.ORGANIZATIONS,
        permissions: ["organization.view"],
      },
    ],
  },

  // ================= Finance =================
  {
    id: "finance",
    label: "Finance",
    module: "finance",
    path: FINANCE_ROUTES.DASHBOARD,
    icon: Scroll,
    permissions: ["setting.manage"],
  },

  // ================= Referral =================
  {
    id: "referal_reward",
    label: "Referral & Reward",
    icon: Wallet,
    permissions: ["marketing.view"],

    submenus: [
      {
        id: "partners",
        label: "Partners",
        module: "reward",
        path: REFERAL_REWARD_ROUTES.PARTNERS,
        permissions: ["user.view"],
      },
      {
        id: "rewards",
        label: "Rewards/Cashback",
        module: "reward",
        path: REFERAL_REWARD_ROUTES.REWARDS,
        permissions: ["event.view"],
      },
      {
        id: "referal",
        label: "Referral/Promoter",
        module: "reward",
        path: REFERAL_REWARD_ROUTES.REFERAL_PROMOTER,
        permissions: ["event.view"],
      },
    ],
  },

  // ================= Marketing =================
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    permissions: ["marketing.view"],

    submenus: [
      {
        id: "facebook",
        label: "Create Facebook Ad Campaign",
        module: "marketing",
        path: MARKETING_ROUTES.FACEBOOK,
        permissions: ["event.create"],
      },
      {
        id: "facebookads",
        label: "Facebook Ad Campaigns",
        module: "marketing",
        path: MARKETING_ROUTES.FACEBOOK_ADS,
        permissions: ["event.create"],
      },
      {
        id: "email",
        label: "Email Marketing",
        module: "marketing",
        path: MARKETING_ROUTES.EMAIL,
        permissions: ["event.view"],
      },
      {
        id: "sms",
        label: "SMS Marketing",
        module: "marketing",
        path: MARKETING_ROUTES.SMS,
        permissions: ["event.view"],
      },
    ],
  },

  // ================= Help =================
  {
    id: "helpcenter",
    label: "Help Center",
    module: "dashboard",
    path: DASHBOARD_ROUTES.HELP,
    icon: CircleHelp,
    permissions: ["help.view"],
  },
];