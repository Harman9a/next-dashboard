"use client";
import React, { useEffect, useState } from "react";
import { MdEdit, MdRemoveRedEye } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import MyTitle from "@/app/ui/common/MyTitle";
import axios from "axios";

export default function Branch() {
  const [name, setName] = useState("");
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    getBranch();
    console.log(process.env.NEXT_PUBLIC_SERVER_URL);
  }, []);

  const getBranch = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/getBranch`)
      .then((res) => {
        setBranches(res.data);
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

  const handleSaveBranch = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/addBranch`, {
        name,
      })
      .then((res) => {
        if (res.data._id) {
          setName("");
          getBranch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    closeModal();
  };

  const handleDeleteBranch = (id: String) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/deleteBranch`, {
        id,
      })
      .then((res) => {
        if (res.data._id) {
          getBranch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    closeModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <MyTitle title="Branch" />
        <div>
          <button className="btn btn-neutral btn-sm" onClick={openModal}>
            Add Branch
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Branch name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((x: any, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{x.name}</td>
                  <td>
                    <div className="flex">
                      <div className="tooltip" data-tip="Delete">
                        <FaTrash
                          size={20}
                          style={myStyle.icon}
                          onClick={() => handleDeleteBranch(x._id)}
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
          <h3 className="font-bold text-lg">Create Branch</h3>
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div>
                  <div className="label">
                    <span className="label-text">Branch Name</span>
                  </div>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter Branch Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div>
                <button
                  className="btn btn-neutral my-3"
                  style={{ width: "150px" }}
                  onClick={handleSaveBranch}
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

const myStyle = {
  icon: {
    cursor: "pointer",
    margin: "2px",
  },
};
