import React from "react";
import axios from "axios";

const Header = () => {

  const logout = async () => {
    await axios.post(
      "https://your-api-domain.com/api/auth/logout",
      {},
      { withCredentials: true }
    );

    window.location.href = "http://localhost:3001/login";
  };

  return (
    <div
      style={{
        padding: "15px",
        background: "#eaeaea",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <span>Admin Panel</span>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Header;