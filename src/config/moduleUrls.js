/**
 * ==========================================================
 * MODULE BASE URLS
 * Used ONLY when navigating between modules
 * Example:
 * Dashboard -> Event
 * Event -> Orders
 * ==========================================================
 */

export const MODULE_URLS = {
  dashboard: "/admin/dashboard",
  event: "/admin/events",
  order: "/admin/orders",
  user: "/admin/users",
  marketing: "/admin/marketing",
  finance: "/admin/finance",
  reward: "/admin/referal-rewards",
};

/**
 * ==========================================================
 * DASHBOARD ROUTES
 * Internal routes inside Dashboard module
 * basename = /admin/dashboard
 * ==========================================================
 */
export const DASHBOARD_ROUTES = {
  HOME: "/home",
  ANALYTICS: "/analytics",
  SETTINGS: "/setting",
  HELP: "/help-center",
};

/**
 * ==========================================================
 * EVENT ROUTES
 * basename = /admin/events
 * ==========================================================
 */
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

/**
 * ==========================================================
 * ORDER ROUTES
 * basename = /admin/orders
 * ==========================================================
 */
export const ORDER_ROUTES = {
  ORDERS: "/all-orders",

  ORDER_CANCELATION_REQ: "/cacellation-requests",

  ORDER_SUPPORT_CANCELATION_REQ:
    "/support-cacellation-requests",

  ORDER_SWAP_REQ_LIST: "/swap-requests-list",
};

/**
 * ==========================================================
 * USER ROUTES
 * basename = /admin/users
 * ==========================================================
 */
export const USER_ROUTES = {
  USERS: "/all-users",

  STAFF: "/staffs",

  ROLES: "/roles",

  ORGANIZATIONS: "/organizations",
};

/**
 * ==========================================================
 * FINANCE ROUTES
 * basename = /admin/finance
 * ==========================================================
 */
export const FINANCE_ROUTES = {
  DASHBOARD: "/finance-data",
};

/**
 * ==========================================================
 * REFERRAL & REWARD ROUTES
 * basename = /admin/referal-rewards
 * ==========================================================
 */
export const REFERAL_REWARD_ROUTES = {
  PARTNERS: "/partners",

  REWARDS: "/rewards",

  REFERAL_PROMOTER: "/referal-promoter-center",
};

/**
 * ==========================================================
 * MARKETING ROUTES
 * basename = /admin/marketing
 * ==========================================================
 */
export const MARKETING_ROUTES = {
  FACEBOOK: "/facebook",

  FACEBOOK_ADS: "/facebook-ads",

  EMAIL: "/email",

  SMS: "/sms",
};