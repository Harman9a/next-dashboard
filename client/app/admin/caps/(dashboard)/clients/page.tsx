"use client";
import React, { useEffect, useState } from "react";
import { MdEdit, MdRemoveRedEye } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import MyTitle from "@/app/ui/common/MyTitle";
import { useRouter } from "next/navigation";
import axios from "axios";

function Dashboard() {
  const router = useRouter();

  const [branches, setBranches] = useState([]);
  const [client, setClient] = useState([]);

  const [branchId, setBranchId] = useState();
  const [name, setName] = useState();
  const [constitution, setConstitution] = useState();
  const [regDate, setRegDate] = useState();
  const [regNo, setRegno] = useState();
  const [businessType, setBusinessType] = useState();
  const [activeSince, setActiveSince] = useState();
  const [facilityType, setFacilityType] = useState();
  const [facilityDetails, setFacilityDetails] = useState();
  const [facilityAmount, setFacilityAmount] = useState();
  const [noOfYears, setNoOfYears] = useState();
  const [creditAnalist, setCreditAnalist] = useState<any>();

  useEffect(() => {
    setCreditAnalist(localStorage.getItem("username"));
    console.log(localStorage.getItem("username"));
    getBranch();
    getClient();
  }, []);

  const getBranch = () => {
    axios
      .get("http://localhost:5000/getBranch")
      .then((res) => {
        setBranches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getClient = () => {
    axios
      .get("http://localhost:5000/getClient")
      .then((res) => {
        setClient(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;

    modal.close();
  };

  const handleSaveClient = () => {
    axios
      .post("http://localhost:5000/addClient", {
        branchId,
        name,
        creditAnalist,
        constitution,
        regDate,
        regNo,
        businessType,
        activeSince,
        facilityType,
        facilityDetails,
        facilityAmount,
        noOfYears,
      })
      .then((res) => {
        if (res.data._id) {
          getClient();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    closeModal();
  };

  const handleDeleteClient = (id: String) => {
    axios
      .post("http://localhost:5000/deleteClient", {
        id,
      })
      .then((res) => {
        if (res.data._id) {
          getClient();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openFile = () => {
    router.push("/admin/caps/balancesheet");
    localStorage.setItem("activeRoute", "balancesheet");
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
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Branch</th>
              <th>Name</th>
              <th>Credit Analyst</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {client.map((x: any, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{x.branchId}</td>
                  <td>{x.name}</td>
                  <td>{x.creditAnalist}</td>
                  <td>
                    <div className="flex">
                      <div className="tooltip" data-tip="Open">
                        <MdRemoveRedEye
                          onClick={openFile}
                          size={20}
                          style={myStyle.icon}
                        />
                      </div>
                      <div className="tooltip mx-3" data-tip="Edit">
                        <MdEdit size={20} style={myStyle.icon} />
                      </div>
                      <div className="tooltip" data-tip="Delete">
                        <FaTrash
                          size={20}
                          style={myStyle.icon}
                          onClick={() => handleDeleteClient(x._id)}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box modal-box w-11/12 max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create New Client</h3>
          <div>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div>
                  <div className="label">
                    <span className="label-text">Branch</span>
                  </div>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e: any) => setBranchId(e.target.value)}
                  >
                    <option disabled selected>
                      Select Branch
                    </option>
                    {branches.map((x: any, i) => {
                      return (
                        <option key={i} value={x._id}>
                          {x.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
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
                      onChange={(e: any) => setName(e.target.value)}
                      value={name}
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Constitution</span>
                  </div>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e: any) => setConstitution(e.target.value)}
                  >
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
                      onChange={(e: any) => setRegDate(e.target.value)}
                      value={regDate}
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
                      onChange={(e: any) => setRegno(e.target.value)}
                      value={regNo}
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Existing OR New Business</span>
                  </div>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e: any) => setBusinessType(e.target.value)}
                  >
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
                      onChange={(e: any) => setActiveSince(e.target.value)}
                      value={activeSince}
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Type of Facility</span>
                  </div>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e: any) => setFacilityType(e.target.value)}
                  >
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
                  <select
                    className="select select-bordered w-full"
                    onChange={(e: any) => setFacilityDetails(e.target.value)}
                  >
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
                      onChange={(e: any) => setFacilityAmount(e.target.value)}
                      value={facilityAmount}
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
                  <select
                    className="select select-bordered w-full"
                    onChange={(e: any) => setNoOfYears(e.target.value)}
                  >
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
                  onClick={handleSaveClient}
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
