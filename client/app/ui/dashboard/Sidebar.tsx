import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoArrowBackSharp } from "@react-icons/all-files/io5/IoArrowBackSharp";
import Image from "next/image";

function Sidebar({ data }: any) {
  const [sideBar, setSideBar] = useState(data);

  useEffect(() => {
    setActiveMenu();
  }, []);

  const setActiveMenu = () => {
    let slug = localStorage.getItem("activeRoute");
    const updatedSidebar = sideBar.map((item: any) => {
      return {
        ...item,
        status: item.slug === slug,
      };
    });
    setSideBar(updatedSidebar);
  };

  const handleClick = (slug: any, id: Number) => {
    localStorage.setItem("activeRoute", slug);
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
          <Image alt="logo" src="/logo.png" width={100} height={100} />
          {/* <h1>Admin Panel</h1> */}
        </div>
        <div>
          <ul className="menu bg-base-200 w-56 rounded-box">
            {sideBar.map((x: any) => {
              return (
                <li className="my-1" key={x.id}>
                  <Link
                    href={x.link}
                    onClick={() => handleClick(x.slug, x.id)}
                    className={x.status === true ? "active" : ""}
                  >
                    {x.icon && <IoArrowBackSharp />}
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
