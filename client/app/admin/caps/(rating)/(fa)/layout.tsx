"use client";
import { CapsRatingSidebar } from "@/app/lib/CapsRatingSidebar";
import Navbar from "@/app/ui/dashboard/Navbar";
import Sidebar from "@/app/ui/dashboard/Sidebar";
import Ratingnavbar from "@/app/ui/rating/Ratingnavbar";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function Layout({ children }: any) {
  const params = useParams();
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
          <div className="p-4">
            {/* <Ratingnavbar id={params.id} /> */}
            {children}
          </div>
        </div>
        <Sidebar data={CapsRatingSidebar} />
      </div>
    </div>
  );
}

export default Layout;
