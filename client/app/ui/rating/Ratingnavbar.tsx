import Link from "next/link";
import React from "react";

function Ratingnavbar() {
  return (
    <div className="text-center">
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
        <li>
          <Link href="/admin/caps/balancesheet">Balance Sheet</Link>
        </li>
        <li>
          <Link href="/admin/caps/profitloss">Profit Loss</Link>
        </li>
        <li>
          <Link href="/admin/caps/iscr">ISCR</Link>
        </li>
        <li>
          <Link href="/admin/caps/dscr">DSCR</Link>
        </li>
        <li>
          <Link href="/admin/caps/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
}

export default Ratingnavbar;
