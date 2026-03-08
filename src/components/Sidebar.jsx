import React from "react";
import { menuItems } from "../navigation/menu";

const Sidebar = () => {
  return (
    <div style={{ width: "220px", background: "#f3f3f3", height: "100vh" }}>
      <h3 style={{ padding: "10px" }}>Admin</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <li key={item.name} style={{ padding: "10px" }}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;