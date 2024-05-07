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

  const [branchId, setBranchId] = useState<any>();
  const [name, setName] = useState<any>();
  const [constitution, setConstitution] = useState<any>();
  const [regDate, setRegDate] = useState<any>();
  const [regNo, setRegno] = useState<any>();
  const [businessType, setBusinessType] = useState<any>();
  const [activeSince, setActiveSince] = useState<any>();
  const [facilityType, setFacilityType] = useState<any>();
  const [facilityDetails, setFacilityDetails] = useState<any>();
  const [facilityAmount, setFacilityAmount] = useState<any>();
  const [noOfYears, setNoOfYears] = useState<any>();
  const [creditAnalist, setCreditAnalist] = useState<any>();

  useEffect(() => {
    setCreditAnalist(localStorage.getItem("username"));
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
    let branchName = branchId.substr(branchId.indexOf("_") + 1);
    console.log(branchName);
    axios
      .post("http://localhost:5000/addClient", {
        branchId,
        branchName,
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
        clearAllFields();
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

  const handleEditClient = (id: String) => {
    console.log(id);

    client.map((x: any) => {
      if (x._id === id) {
        console.log(x);
        setName(x.name);
      }
    });

    openModal();
  };

  const clearAllFields = () => {
    setName("");
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {client.map((x: any, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{x.branchName}</td>
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
                        <MdEdit
                          size={20}
                          style={myStyle.icon}
                          onClick={() => handleEditClient(x._id)}
                        />
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
                    defaultValue={"0"}
                  >
                    <option value="0" disabled>
                      Select Branch
                    </option>
                    {branches.map((x: any, i) => {
                      return (
                        <option key={i} value={`${x._id}_${x.name}`}>
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
                      value={name || ""}
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
                    defaultValue={"0"}
                  >
                    <option value="0" disabled>
                      Select Constitution
                    </option>
                    <option value="Private_Limited_Company">
                      Private Limited Company
                    </option>
                    <option value="Public_Company">Public Company</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Proprietorship">Proprietorship</option>
                    <option value="Other">Other</option>
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
                      value={regDate || ""}
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
                      value={regNo || ""}
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
                    defaultValue={"0"}
                  >
                    <option disabled value="0">
                      Select Business Type
                    </option>
                    <option value="Existing_Business">Existing Business</option>
                    <option value="New_Business">New Business</option>
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
                      value={activeSince || ""}
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
                    defaultValue={"0"}
                  >
                    <option disabled value="0">
                      Select Facility Type
                    </option>
                    <option value="Fund_Based">Fund Based</option>
                    <option value="Non-Fund_Based">Non-Fund Based</option>
                    <option value="Both">Both</option>
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
                    defaultValue={"0"}
                  >
                    <option disabled value="0">
                      Select Facility Details
                    </option>
                    <option value="Floating_Facility">Floating Facility</option>
                    <option value="Term_Loan_Facility">
                      Term Loan Facility
                    </option>
                    <option value="Both_Facility">Both Facility</option>
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
                      value={facilityAmount || ""}
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
                    defaultValue={"0"}
                  >
                    <option disabled value="0">
                      Select No. of Years
                    </option>
                    <option value="1">Current Plus One Years</option>
                    <option value="2">Current Plus Two Years</option>
                    <option value="3">Current Plus Three Years</option>
                    <option value="4">Current Plus Four Years</option>
                    <option value="5">Current Plus Five Years</option>
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
