import {
  AlignJustify,
  ChevronLeft,
  Bell,
  Search,
  User,
  LogOut
} from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================= TOP BAR THEME =================
 * Happnex blue gradient (same family as the website's front pages).
 * Change --hx-topbar-gradient to match the website exactly.
 * The scoped rules keep the buttons modules place in the bar readable
 * (role switch, organisation switch, notifications) without editing them.
 */
const TOPBAR_CSS = `
.hx-topbar {
  --hx-topbar-gradient: linear-gradient(90deg, #0D375F 0%, #14528E 45%, #2189ED 100%);
  background-image: var(--hx-topbar-gradient);
  color: #fff;
}
.hx-topbar .hx-topbar-logo { filter: brightness(0) invert(1); }
.hx-topbar .text-muted-foreground { color: rgba(255, 255, 255, 0.75); }
.hx-topbar button:not([role="menuitem"]):hover { background-color: rgba(255, 255, 255, 0.12); }
/* "Your Tickets" / role switch: white pill on the blue bar */
.hx-topbar .bg-\\[\\#2189ed\\] { background-color: #fff; color: #14528E; }
.hx-topbar .bg-\\[\\#2189ed\\]:hover { background-color: #E9F3FD; }
/* Organisation switch and other muted chips */
.hx-topbar .bg-muted { background-color: rgba(255, 255, 255, 0.14); border-color: rgba(255, 255, 255, 0.25); color: #fff; }
`;

/* ================= HELPERS ================= */
const truncate = (text = "", length = 18) =>
  text.length > length ? text.slice(0, length) + "..." : text;

/* ================= COMPONENT ================= */
export default function Header({
  user,
  expanded,
  setOpen,
  toggleSidebar,
  onLogout,
  onProfileClick,
  logo,
  onLogoClick,
  ActiveRoleSwitch,
  OrgRoleSwitch,
  NotificationComponent,
}) {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  /* ================= LOGOUT ================= */
  const handleLogoutClick = async () => {
    console.log('doing logout from shared-ui')
    if (loggingOut) return;

    setLoggingOut(true);
    try {
      await onLogout?.();
    } catch (e) {
      console.error("Logout failed", e);
    } finally {
      // fallback reset (in case navigation fails)
      setTimeout(() => setLoggingOut(false), 3000);
    }
  };

  return (
    <header className="hx-topbar fixed top-0 left-0 right-0 border-b border-white/10 shadow-sm z-50">
      <style>{TOPBAR_CSS}</style>
      <div className="flex items-center justify-between h-[60px] px-4">

        {/* ================= LEFT ================= */}
        <div className="flex items-center gap-3">

          {/* MOBILE MENU */}
          <Button
            onClick={() => setOpen(true)}
            size="icon"
            variant="ghost"
            className="lg:hidden rounded-full text-white hover:bg-white/10 hover:text-white"
          >
            <AlignJustify className="h-6 w-6" />
          </Button>

          {/* SIDEBAR COLLAPSE */}
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            className="p-2 rounded-md hidden lg:flex text-white hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft
              className={`h-5 w-5 transition-transform duration-300 ${
                expanded ? "" : "rotate-180"
              }`}
            />
          </Button>

          {/* LOGO */}
          {logo && (
            <img
              src={logo}
              onClick={() => onLogoClick?.()}
              className="hx-topbar-logo w-32 cursor-pointer"
              alt="logo"
            />
          )}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-3 ml-auto">

          {/* SEARCH */}
          <div className="relative hidden">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search…"
              className="pl-10 w-[260px] lg:w-[320px] rounded-md bg-muted/60 border shadow-sm"
            />
          </div>

          {/* ================= NOTIFICATIONS ================= */}
          {NotificationComponent ? (
            <NotificationComponent user={user} />
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost" className="relative text-white hover:bg-white/10 hover:text-white">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-72 mt-2 rounded-xl shadow-xl"
              >
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>No notifications</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* ================= USER MENU ================= */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-2 py-1 rounded-md">

                {/* ICON */}
                <div className="h-9 w-9 flex items-center justify-center rounded-md bg-white/15">
                  <User className="h-5 w-5" />
                </div>

                {/* NAME + ROLE */}
                <div className="hidden md:flex flex-col text-left leading-tight">
                  <span
                    className="text-sm font-semibold max-w-[140px] truncate"
                    title={user?.name}
                  >
                    {truncate(user?.name || user?.userName)}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {user?.activeRole?.name}
                  </span>
                </div>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-56 mt-2 rounded-xl shadow-xl"
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => onProfileClick?.()}>
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={handleLogoutClick}
                disabled={loggingOut}
                className="text-red-600 focus:text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                {loggingOut ? "Logging out..." : "Logout"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* ================= SWITCHES ================= */}
          {user && ActiveRoleSwitch && <ActiveRoleSwitch user={user} />}
          {user && OrgRoleSwitch && <OrgRoleSwitch />}

        </div>
      </div>
    </header>
  );
}