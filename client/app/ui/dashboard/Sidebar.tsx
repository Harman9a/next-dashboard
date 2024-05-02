import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar({ data }: any) {
  const pathname = usePathname();
  const [sideBar, setSideBar] = useState(data);
  const [openName, setOpenName] = useState("");

  useEffect(() => {
    setActiveMenu();
  }, []);

  const setActiveMenu = () => {
    const updatedSidebar = sideBar.map((item: any) => {
      return {
        ...item,
        status: item.link === pathname,
      };
    });
    setSideBar(updatedSidebar);
  };

  const handleMenuClick = (id: Number) => {
    const updatedSidebar = sideBar.map((item: any) => {
      return {
        ...item,
        status: item.id === id,
      };
    });
    setSideBar(updatedSidebar);
  };

  return (
    <div className="drawer-side">
      <div className=" p-4  min-h-full bg-base-200 text-base-content">
        <div className="flex h-16 items-center justify-center">
          {/* <img src="/logo.png" style={{ width: "120px" }} /> */}
          <h1>Admin Panel</h1>
        </div>
        <div>
          <ul className="menu bg-base-200 w-56 rounded-box">
            {sideBar.map((x: any) => {
              return (
                <li
                  className="my-1"
                  onClick={() => handleMenuClick(x.id)}
                  key={x.id}
                >
                  <Link
                    href={x.link}
                    className={x.status === true ? "active" : ""}
                  >
                    {x.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
