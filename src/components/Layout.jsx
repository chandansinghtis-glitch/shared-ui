import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

/* ================= PAGE SHADE =================
 * Same look as the website's pages (e.g. /events/browse/promote-events):
 * a light blue shade over the top half of the page fading to white, with
 * the top bar in the same light blue. Plain CSS (not Tailwind classes) so it
 * works whatever each module's Tailwind setup scans.
 */
const SHADE_CSS = `
.hx-topbar {
  background-color: rgba(211, 231, 251, 0.92);
  border-color: rgba(33, 137, 237, 0.12);
}
.hx-page {
  position: relative;
}
.hx-page-shade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50vh;
  min-height: 320px;
  background: linear-gradient(to bottom, #D3E7FB 0%, #e2eef9 30%, #eef5fb 60%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
  z-index: 0;
}
.hx-page-main {
  position: relative;
  z-index: 1;
}
`;

export default function Layout({
  children,
  user,

  // ✅ forwarded props from module
  onLogout,
  onProfileClick,
  logo,
  onLogoClick,
  ActiveRoleSwitch,
  OrgRoleSwitch,
  NotificationComponent,
  current_module,

  // Pages that need the full width (e.g. the event builder): the menu
  // collapses while one of these paths is open and comes back after.
  // Path prefixes inside the module, e.g. ["/eventcreate"].
  collapsedPaths = [],
}) {
  const [expanded, setExpanded] = useState(true);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const shouldCollapse = collapsedPaths.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  const restoreTo = useRef(null);

  useEffect(() => {
    if (shouldCollapse) {
      setExpanded((prev) => {
        if (restoreTo.current === null) restoreTo.current = prev;
        return false;
      });
    } else if (restoreTo.current !== null) {
      setExpanded(restoreTo.current);
      restoreTo.current = null;
    }
  }, [shouldCollapse]);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">

      {/* ================= SIDEBAR ================= */}
      <Sidebar expanded={expanded} user={user} current_module={current_module} />

      {/* ================= MAIN ================= */}
      <style>{SHADE_CSS}</style>
      <div
        className={`hx-page flex flex-col flex-1 transition-all duration-300 ${
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
          onLogoClick={onLogoClick}
          ActiveRoleSwitch={ActiveRoleSwitch}
          OrgRoleSwitch={OrgRoleSwitch}
          NotificationComponent={NotificationComponent}
        />

        {/* ================= CONTENT ================= */}
        <div className="hx-page-shade" aria-hidden="true" />
        <main className="hx-page-main p-6 pt-[70px]">
          {children}
        </main>

      </div>
    </div>
  );
}