import React, { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const [sideBar, setSideBar] = useState(SidebarData);
  const [openName, setOpenName] = useState("");

  useEffect(() => {
    setActiveMenu();
  }, []);

  const setActiveMenu = () => {
    const updatedSidebar = sideBar.map((item) => {
      if (item.submenu !== undefined) {
        return {
          ...item,
          submenu: item.submenu.map((x) => {
            if (x.link === pathname) {
              setOpenName(item.name);
            }
            return {
              ...x,
              status: x.link === pathname,
            };
          }),
        };
      } else {
        return {
          ...item,
          status: item.link === pathname,
        };
      }
    });
    setSideBar(updatedSidebar);
    console.log(openName);
  };

  const handleMenuClick = (id: Number) => {
    const updatedSidebar = sideBar.map((item) => {
      if (item.submenu !== undefined) {
        return {
          ...item,
          submenu: item.submenu.map((x) => {
            return {
              ...x,
              status: x.id === id,
            };
          }),
        };
      } else {
        return {
          ...item,
          status: item.id === id,
        };
      }
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
            {sideBar.map((x) => {
              if (x.submenu !== undefined) {
                return (
                  <li key={x.id}>
                    <details>
                      <summary>{x.name}</summary>
                      <ul>
                        {x.submenu.map((y) => {
                          return (
                            <li key={y.id}>
                              <Link
                                href={y.link}
                                className={y.status === true ? "active" : ""}
                              >
                                {y.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </li>
                );
              } else {
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
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
