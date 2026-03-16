import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import logo from './../asset/happnex-logo.svg'
export default function Layout({ children, user }) {

  const [expanded, setExpanded] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleLogout = () => {
   console.log('do logout')
  };

  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <Sidebar expanded={expanded} user={user} />

      {/* MAIN AREA */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          expanded ? "ml-[240px]" : "ml-[70px]"
        }`}
      >

        {/* HEADER */}
        <Header
          user={user}
          expanded={expanded}
          setOpen={setOpen}
          toggleSidebar={toggleSidebar}
          onLogout={handleLogout}
          logo={logo}
        />

        {/* PAGE CONTENT */}
        <main className="p-6 pt-[70px]">
          {children}
        </main>

      </div>

    </div>
  );
}