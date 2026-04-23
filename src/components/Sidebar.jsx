import {
  ChevronDown
} from "lucide-react";
import { Fragment, useState, useRef, useEffect, useMemo } from "react";
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
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const hoverTimeoutRef = useRef(null);

  const userPermissions = user?.permissions || [];

  const filteredMenus = useMemo(() =>
    filterMenuByPermissions(adminSidebarMenuItems, userPermissions),
    [userPermissions]);

  useEffect(() => {
    const activeMenu = filteredMenus.find(menu =>
      menu.submenus?.some(sub => isActive(sub.path))
    );

    if (activeMenu) {
      setOpenSubmenu(activeMenu.id);
    }
  }, [location.pathname, filteredMenus]);

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenu(null);
    }
  }, [isOpen]);

  const handleEnter = id => {
    clearTimeout(hoverTimeoutRef.current);
    setHoveredParent(id);
  };

  const handleLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredParent(null), 120);
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenu(prev => (prev === id ? null : id));
  };

  const isActive = (path) => {
    if (!path) return false;

    try {
      const url = path.startsWith("http")
        ? new URL(path)
        : new URL(path, window.location.origin);

      return location.pathname.startsWith(url.pathname);
    } catch {
      return false;
    }
  };

  const handleNavigation = (path) => {
    if (!path) return;

    // if external domain
    if (path.startsWith("http")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="flex-col flex gap-2 relative">

      {filteredMenus.map(menuItem => {

        const hasSubmenu = menuItem.submenus && menuItem.submenus.length > 0;
        const isHovered = hoveredParent === menuItem.id;
        const isSubmenuOpen = openSubmenu === menuItem.id;

        const activeParent =
          hasSubmenu &&
          menuItem.submenus.some(sub => isActive(sub.path));

        // ✅ render icon component
        const Icon = menuItem.icon;

        return (
          <div
            key={menuItem.id}
            className="relative flex flex-col"
            onMouseEnter={() => handleEnter(menuItem.id)}
            onMouseLeave={handleLeave}
          >

            {/* Parent menu */}
            <div
              className={`relative group flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-all
    ${isActive(menuItem.path) || activeParent
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground hover:shadow-sm"
                }
  `}
              onClick={() => {
                if (hasSubmenu && isOpen) toggleSubmenu(menuItem.id);
                else if (!hasSubmenu && menuItem.path) {
                  handleNavigation(menuItem.path);
                }
              }}
            >
              {!isOpen && (
                <div className="absolute left-full ml-3 z-50 px-2 py-1 text-xs bg-black text-white rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {menuItem.label}
                </div>
              )}

              {(isActive(menuItem.path) || activeParent) && (
                <div className="absolute left-0 top-1 bottom-1 w-1 bg-primary rounded-r-md" />
              )}
              <div className="flex items-center gap-2">

                {/* ✅ Icon render fix */}
                {Icon && <Icon size={18} />}

                <span
                  className={`transition-all duration-200 ${isOpen
                    ? "opacity-100 ml-2"
                    : "opacity-0 w-0 overflow-hidden"
                    }`}
                >
                  {menuItem.label}
                </span>

              </div>

              {hasSubmenu && isOpen && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu(menuItem.id);
                  }}
                  className="p-1 rounded hover:bg-muted"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-all duration-300 ease-in-out ${isSubmenuOpen ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>
              )}
            </div>

            {/* Collapsed hover submenu */}
            {!isOpen && isHovered && hasSubmenu && (
              <div className="absolute left-full top-0 ml-2 w-48 flex flex-col bg-background/80 backdrop-blur-md border shadow-lg rounded-md py-2 z-50 animate-slideIn">

                <div className="absolute -left-2 top-3 w-3 h-3 bg-background/80 backdrop-blur-md border-t border-r rotate-45"></div>

                {menuItem.submenus.map(sub => (
                  <div
                    key={sub.id}
                    onClick={() => handleNavigation(sub.path)}
                    className={`px-2 py-2 rounded-md text-sm cursor-pointer transition-all
  ${isActive(sub.path)
                        ? "bg-primary/10 text-primary font-medium"
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
            {hasSubmenu && isOpen && (
              <div
                className={`ml-6 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isSubmenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >

                {menuItem.submenus.map(sub => (
                  <div
                    key={sub.id}
                    onClick={() => handleNavigation(sub.path)}
                    className={`px-2 py-2 rounded-md text-sm cursor-pointer transition-all
                      ${isActive(sub.path)
                        ? "bg-primary/10 text-primary font-medium"
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
        className="hidden lg:flex flex-col border-r bg-background/80 backdrop-blur-md pt-[50px] fixed h-full left-0 top-0 z-10 overflow-y-auto overflow-x-visible"
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