"use client";
import React from "react";
import { FcOpenedFolder } from "@react-icons/all-files/fc/FcOpenedFolder";
import { FcEmptyTrash } from "@react-icons/all-files/fc/FcEmptyTrash";
import { FcEditImage } from "@react-icons/all-files/fc/FcEditImage";
import MyTitle from "@/app/ui/common/MyTitle";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const openModal = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };

  const openFile = () => {
    router.push("/admin/caps/balancesheet");
  };

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <MyTitle title="Clients" />
        <div>
          <button className="btn btn-neutral btn-sm" onClick={openModal}>
            Add Client
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Branch</th>
              <th>Name</th>
              <th>Credit Analyst</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Amritsar</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <div className="flex">
                  <FcEditImage title="Edit" size={20} style={myStyle.icon} />
                  <FcOpenedFolder
                    onClick={openFile}
                    title="Open"
                    size={20}
                    style={myStyle.icon}
                  />
                  <FcEmptyTrash title="Delete" size={20} style={myStyle.icon} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <button className="btn" onClick={() => openModal()}>
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box modal-box w-11/12 max-w-3xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create New Client</h3>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Client Name</span>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter Client Name"
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Constitution</span>
                  </div>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Select Constitution
                    </option>
                    <option>Private Limited Company</option>
                    <option>Public Company</option>
                    <option>Partnership</option>
                    <option>Proprietorship</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Firm Registration Date</span>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="date"
                      className="grow"
                      placeholder="Enter Registration Date"
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Firm Registration No.</span>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter Registration No."
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Existing OR New Business</span>
                  </div>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Select Business Type
                    </option>
                    <option>Existing Business</option>
                    <option>New Business</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Active Business Since</span>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="date"
                      className="grow"
                      placeholder="Enter Business Since"
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Type of Facility</span>
                  </div>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Select Facility Type
                    </option>
                    <option>Fund Based</option>
                    <option>Non-Fund Based</option>
                    <option>Both</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">
                      Fund Based Facility Details
                    </span>
                  </div>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Select Facility Details
                    </option>
                    <option>Floating Facility</option>
                    <option>Term Loan Facility</option>
                    <option>Both Facility</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Credit Facilities Amount</span>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter Amount in Millions"
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">
                      Financials- Choose No. of Years
                    </span>
                  </div>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Select No. of Years
                    </option>
                    <option>Current Plus One Years</option>
                    <option>Current Plus Two Years</option>
                    <option>Current Plus Three Years</option>
                    <option>Current Plus Four Years</option>
                    <option>Current Plus Five Years</option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-neutral my-3"
                  style={{ width: "150px" }}
                  onClick={closeModal}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Dashboard;

const myStyle = {
  icon: {
    cursor: "pointer",
    margin: "2px",
  },
};
