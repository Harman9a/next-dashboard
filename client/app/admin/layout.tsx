"use client";
import React, { useState } from "react";
import Navbar from "../ui/dashboard/Navbar";
import Sidebar from "../ui/dashboard/Sidebar";

function layout({ children }: any) {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <div>
      <div
        className={`drawer ${
          sidebarToggle === true ? "drawer-open" : "drawer-close"
        }`}
      >
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="p-4">{children}</div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default layout;
