"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("admin");

  const router = useRouter();

  useEffect(() => {
    checkUserLogin();
  }, []);

  const checkUserLogin = () => {
    let status = localStorage.getItem("islogin");
    if (status === "true") {
      router.push(`/admin`);
    }
  };

  const handleLogin = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
        email,
        password,
        userType,
      })
      .then((res) => {
        localStorage.setItem("user", res.data._id);
        localStorage.setItem("islogin", "true");
        router.push(`/admin`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="grid h-screen grid-cols-12">
        <div
          style={{ backgroundColor: "#ffe9d1" }}
          className="relative hidden dark:bg-[#14181c] lg:col-span-7 lg:block xl:col-span-8 2xl:col-span-9"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              alt="Auth Image"
              loading="lazy"
              width="1000"
              height="667"
              decoding="async"
              data-nimg="1"
              className="object-cover"
              src="/image.png"
            />
          </div>
        </div>
        <div className="col-span-12  lg:col-span-5 xl:col-span-4 2xl:col-span-3">
          <div
            className="flex flex-col items-stretch p-8 lg:p-16 justify-center"
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-center">
              {/* <img alt="logo" src="/logo.png" /> */}
            </div>
            <h3 className="mt-12 text-center text-xl font-semibold lg:mt-12">
              {/* Credit Appraisal Processing System */}
              Login
            </h3>
            <div>
              <div className="my-1">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="my-1">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="my-1">
                <div className="label">
                  <span className="label-text">Role</span>
                </div>
                <select
                  className="select select-bordered w-full"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="my-10">
                <button
                  className="btn btn-primary w-full"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
