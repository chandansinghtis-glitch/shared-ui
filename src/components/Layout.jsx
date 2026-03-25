import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({
  children,
  user,

  // ✅ forwarded props from module
  onLogout,
  onProfileClick,
  logo,
  logoLink,
  ActiveRoleSwitch,
  OrgRoleSwitch,
  NotificationComponent,
}) {
  const [expanded, setExpanded] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">

      {/* ================= SIDEBAR ================= */}
      <Sidebar expanded={expanded} user={user} />

      {/* ================= MAIN ================= */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          expanded ? "ml-[240px]" : "ml-[70px]"
        }`}
      >

        {/* ================= HEADER ================= */}
        <Header
          user={user}
          expanded={expanded}
          setOpen={setOpen}
          toggleSidebar={toggleSidebar}

          // ✅ forward from module
          onLogout={onLogout}
          onProfileClick={onProfileClick}
          logo={logo}
          logoLink={logoLink}
          ActiveRoleSwitch={ActiveRoleSwitch}
          OrgRoleSwitch={OrgRoleSwitch}
          NotificationComponent={NotificationComponent}
        />

        {/* ================= CONTENT ================= */}
        <main className="p-6 pt-[70px]">
          {children}
        </main>

      </div>
    </div>
  );
}