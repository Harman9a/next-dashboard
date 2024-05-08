import { RatingNavbar } from "@/app/lib/RatingNavBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Ratingnavbar({ id }: any) {
  const [navBar, setNavBar] = useState(RatingNavbar);

  useEffect(() => {
    setActiveMenu();
  }, []);

  const setActiveMenu = () => {
    let slug = localStorage.getItem("activeRoute2");
    const updatedNavbar = navBar.map((item: any) => {
      return {
        ...item,
        status: item.slug === slug,
      };
    });
    setNavBar(updatedNavbar);
  };

  const handleClick = (slug: any, id: Number) => {
    localStorage.setItem("activeRoute2", slug);
    const updatedNavbar = navBar.map((item: any) => {
      return {
        ...item,
        status: item.id === id,
      };
    });
    setNavBar(updatedNavbar);
  };

  return (
    <div className="text-center">
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
        {navBar.map((x: any, i) => {
          return (
            <li key={i}>
              <Link
                href={x.link + "/" + id}
                className={x.status === true ? "active" : ""}
                onClick={() => handleClick(x.slug, x.id)}
              >
                {x.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ratingnavbar;
