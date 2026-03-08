import {
  AlignJustify,
  ChevronLeft,
  Bell,
  Search,
  User,
  LogOut
} from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { useNavigate } from "react-router-dom";

export default function Header({
  user,
  expanded,
  setOpen,
  toggleSidebar,
  onLogout,
  logo,
  ActiveRoleSwitch,
  OrgRoleSwitch
}) {

  const navigate = useNavigate();

  const truncate = (text, length = 18) => {
    if (!text) return "";
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b z-50">
      <div className="flex items-center justify-between h-[60px] px-4">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* MOBILE MENU */}
          <Button
            onClick={() => setOpen(true)}
            size="icon"
            variant="ghost"
            className="lg:hidden rounded-full hover:bg-muted"
          >
            <AlignJustify className="h-6 w-6" />
          </Button>

          {/* SIDEBAR COLLAPSE */}
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            className="p-2 rounded-md hidden lg:flex"
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
              className="w-32 cursor-pointer"
              onClick={() => navigate("/admin/dashboard")}
            />
          )}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 ml-auto">

          {/* SEARCH */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search…"
              className="pl-10 w-[260px] lg:w-[320px] rounded-md bg-muted/60 border shadow-sm"
            />
          </div>

          {/* NOTIFICATIONS */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-72 mt-2 rounded-xl shadow-xl">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem className="flex flex-col items-start py-3">
                <p className="font-medium text-sm">New Order</p>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="flex flex-col items-start py-3">
                <p className="font-medium text-sm">Revenue updated</p>
                <span className="text-xs text-muted-foreground">1 hour ago</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* USER MENU */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100">

                <div className="h-9 w-9 flex items-center justify-center rounded-md bg-muted">
                  <User className="h-5 w-5" />
                </div>

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

            <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl shadow-xl">

              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => navigate(`/admin/user/${user?._id}`)}
              >
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={onLogout}
                className="text-red-600 focus:text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>

          {/* OPTIONAL SWITCH COMPONENTS */}
          {ActiveRoleSwitch && <ActiveRoleSwitch user={user} />}
          {OrgRoleSwitch && <OrgRoleSwitch />}

        </div>
      </div>
    </header>
  );
}