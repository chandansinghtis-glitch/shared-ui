import {
  ChevronDown,
  ChartNoAxesCombined
} from "lucide-react";
import { Fragment, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { adminSidebarMenuItems } from "../navigation/menu";

// ================== Helper: Filter menu items by permissions ==================
const filterMenuByPermissions = (menus, userPermissions) => {
  return menus
    .map(menu => {
      const filteredSubmenus = menu.submenus
        ? menu.submenus.filter(sub =>
            sub.permissions.some(p => userPermissions.includes(p))
          )
        : [];

      const includeMenu =
        (menu.permissions &&
          menu.permissions.some(p => userPermissions.includes(p))) ||
        filteredSubmenus.length > 0;

      if (!includeMenu) return null;

      return { ...menu, submenus: filteredSubmenus };
    })
    .filter(Boolean);
};

// ================== MenuItems ==================
function MenuItems({ isOpen, user }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [hoveredParent, setHoveredParent] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const hoverTimeoutRef = useRef(null);

  const userPermissions = user?.permissions || [];

  const filteredMenus = filterMenuByPermissions(
    adminSidebarMenuItems,
    userPermissions
  );

  const handleEnter = id => {
    clearTimeout(hoverTimeoutRef.current);
    setHoveredParent(id);
  };

  const handleLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredParent(null), 120);
  };

  const toggleSubmenu = id => {
    setOpenSubmenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = path => location.pathname === path;

  return (
    <nav className="flex-col flex gap-2 relative">

      {filteredMenus.map(menuItem => {

        const hasSubmenu = menuItem.submenus && menuItem.submenus.length > 0;
        const isHovered = hoveredParent === menuItem.id;
        const isSubmenuOpen = openSubmenus[menuItem.id];

        const activeParent =
          hasSubmenu &&
          menuItem.submenus.some(sub => isActive(sub.path));

        return (
          <div
            key={menuItem.id}
            className="relative flex flex-col"
            onMouseEnter={() => handleEnter(menuItem.id)}
            onMouseLeave={handleLeave}
          >

            {/* Parent menu */}
            <div
              className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-all
                ${
                  isActive(menuItem.path) || activeParent
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }
                ${isOpen ? "justify-between" : "justify-center"}
              `}
              onClick={() => {
                if (hasSubmenu && isOpen) toggleSubmenu(menuItem.id);
                else if (!hasSubmenu && menuItem.path) {
                  navigate(menuItem.path);
                }
              }}
            >
              <div className="flex items-center gap-2">

                {menuItem.icon}

                <span
                  className={`transition-all duration-200 ${
                    isOpen
                      ? "opacity-100 ml-2"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  {menuItem.label}
                </span>

              </div>

              {hasSubmenu && isOpen && (
                <button
                  onClick={() => toggleSubmenu(menuItem.id)}
                  className="p-1 rounded hover:bg-muted"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isSubmenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Collapsed hover submenu */}
            {!isOpen && isHovered && hasSubmenu && (
              <div className="absolute left-full top-0 ml-2 w-48 bg-background border shadow-lg rounded-md py-2 z-50 animate-slideIn">

                <div className="absolute -left-2 top-3 w-3 h-3 bg-background border-t border-r rotate-45"></div>

                {menuItem.submenus.map(sub => (
                  <div
                    key={sub.id}
                    onClick={() => navigate(sub.path)}
                    className={`px-4 py-2 rounded-md text-sm cursor-pointer transition-all
                      ${
                        isActive(sub.path)
                          ? "text-primary bg-muted"
                          : "hover:bg-muted"
                      }
                    `}
                  >
                    {sub.label}
                  </div>
                ))}

              </div>
            )}

            {/* Expanded submenu */}
            {hasSubmenu && isOpen && isSubmenuOpen && (
              <div className="ml-6 gap-2 flex flex-col transition-all duration-300">

                {menuItem.submenus.map(sub => (
                  <div
                    key={sub.id}
                    onClick={() => navigate(sub.path)}
                    className={`px-2 py-2 rounded-md text-sm cursor-pointer transition-all
                      ${
                        isActive(sub.path)
                          ? "text-primary"
                          : "hover:bg-muted"
                      }
                    `}
                  >
                    {sub.label}
                  </div>
                ))}

              </div>
            )}

          </div>
        );
      })}

    </nav>
  );
}

// ================== Sidebar ==================
export default function Sidebar({ expanded = true, user }) {

  const isOpen = expanded;

  return (
    <Fragment>

      <aside
        className="hidden lg:flex flex-col border-r bg-background pt-[50px] fixed h-full left-0 top-0 transition-width duration-300 ease-in-out z-10"
        style={{ width: isOpen ? 240 : 70 }}
      >

        <div className="py-6">
          <MenuItems isOpen={isOpen} user={user} />
        </div>

      </aside>

      <style>
        {`
        @keyframes slideIn {
          0% { transform: translateX(-10px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        `}
      </style>

    </Fragment>
  );
}