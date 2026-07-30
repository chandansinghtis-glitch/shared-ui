// Cross-module URLs (used to switch between modules)
export const MODULE_URLS = {
  EVENT: '/admin/events',
  DASHBOARD:'/admin/dashboard',
  USER: '/admin/users',
  ORDER: '/admin/orders',
  REWARD: '/admin/referal-rewards',
  MARKETING: '/admin/marketing',
  FINANCE: '/admin/finance',
};
// ================= Dashboard Internal Routes =================

export const DASHBOARD_ROUTES = {
  HOME: "/home",
  ANALYTICS: "/analytics",
  SETTINGS: "/setting",
  HELP: "/help-center",
};

// ================= Event Internal Routes =================

export const EVENT_ROUTES = {
  EVENTS: "/all-events",

  CREATE_EVENT: "/eventcreate",
  EDIT_EVENT: (eventId) => `/eventcreate/${eventId}`,

  CATEGORIES: "/event-cats",

  REVENUE: (eventId) => `/event-revenue/${eventId}`,

  COUPONS: (eventId) => `/coupons/${eventId}`,

  SWAP_REQUESTS: "/swap-requests-list",

  SWAP_BOOKING: (swapId, eventId) =>
    `/swap-ticket-booking/${swapId}/${eventId}`,

  VENDORS: "/addon-vendors",

  VENDOR_DETAILS: (vendorId) =>
    `/addon-vendors/details/${vendorId}`,
};
export const ORDER_ROUTES = {
  ORDERS: "/all-orders",
  ORDER_CANCELATION_REQ: "/cacellation-requests",
  ORDER_SUPPORT_CANCELATION_REQ: "/support-cacellation-requests",
  ORDER_SWAP_REQ_LIST: "/swap-requests-list",
};
export const USER_ROUTES = {
  USERS: "/all-users",
  STAFF: "/staffs",
  ROLES: "/roles",
  ORGANIZATION: "/organizations",
};

export const FINANCE_ROUTES = {
  FINANCE: "/finance-data",
};
export const REFERAL_REWARD_ROUTES = {
  PARTNERS: "/partners",
  REWARDS: "/rewards",
  REFERAL_PROMOTER: "/referal-promoter-center",
};
export const MARKETING_ROUTES = {
  FACEBOOK: "/facebook",
  FACEBOOK_ADS: "/facebook-ads",
  EMAIL: "/email",
  SMS: "/sms",
};