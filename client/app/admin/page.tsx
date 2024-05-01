"use client";
import React from "react";

function Dashboard() {
  const openModal = () => {
    document.getElementById("my_modal_3").showModal();
  };
  return (
    <div>
      <div className="flex justify-end my-3">
        <button className="btn btn-neutral btn-sm" onClick={openModal}>
          Add Client
        </button>
      </div>
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
      {/* <button className="btn" onClick={() => openModal()}>
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create New Client</h3>
          <div>
            <div className="my-1">
              <div className="label">
                <span className="label-text">Client Name</span>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter your Client Name"
                />
              </label>
            </div>
            <div className="my-1">
              <div className="label">
                <span className="label-text">Constitution :</span>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter your Client Name"
                />
              </label>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Dashboard;
