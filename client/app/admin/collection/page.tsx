import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <div>
          <h1 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Collection</h1>
        </div>
        <div>
          <Link href="collection/add">
            <button className="btn btn-sm">Add Collection</button>
          </Link>
        </div>
      </div>
      <div className="card bg-base-200 p-1 my-4" style={{ borderRadius: 0 }}>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
