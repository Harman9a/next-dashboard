import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Ratingnavbar() {
  const pathname = usePathname();

  return (
    <div className="text-center">
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
        <li>
          <Link
            href="/admin/caps/balancesheet"
            className={pathname == "/admin/caps/balancesheet" ? "active" : ""}
          >
            Balance Sheet
          </Link>
        </li>
        <li>
          <Link
            href="/admin/caps/profitloss"
            className={pathname == "/admin/caps/profitloss" ? "active" : ""}
          >
            Profit Loss
          </Link>
        </li>
        <li>
          <Link
            href="/admin/caps/iscr"
            className={pathname == "/admin/caps/iscr" ? "active" : ""}
          >
            ISCR
          </Link>
        </li>
        <li>
          <Link
            href="/admin/caps/dscr"
            className={pathname == "/admin/caps/dscr" ? "active" : ""}
          >
            DSCR
          </Link>
        </li>
        <li>
          <Link
            href="/admin/caps/reports"
            className={pathname == "/admin/caps/reports" ? "active" : ""}
          >
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Ratingnavbar;
