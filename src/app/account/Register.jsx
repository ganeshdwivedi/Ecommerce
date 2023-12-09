"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = async () => {
    try {
      if (name != "" && password != "" && email != "") {
        const response = await axios.post("/api/user/register", {
          email,
          password,
          name,
          picture,
        });
        console.log(response.data);
        router.push("/account/Login");
        toast.success("Registeration successfull.");
      } else {
        toast.error("Please enter all required fields");
      }
    } catch (error) {
      console.log("error", error.message);
      toast.error("Registeration failed.");
    }
  };

  return (
    <div className="w-[99vw] lg:mt-20 relative  overflow-x-clip ">
      <div className="sm:mt-20 md:mt-0 sm:m-2 ">
        <h1 className="text-4xl font-extrabold text-left lg:pl-20 pb-5">
          My Account
        </h1>
        <div className="m-14 flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className=" md:w-[37vw] sm:w-full Register-form"
          >
            <div className="flex justify-center flex-col items-center">
              <p className="font-bold">Register</p>
              <hr className="h-[2px] w-full mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col justify-start items-center">
              <div className="flex flex-col my-3">
                <label className="text-xs font-bold uppercase">User Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black"
                  type="text"
                  placeholder="User Name"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="text-xs font-bold uppercase">Email</label>
                <input
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black"
                  type="email"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="text-xs font-bold uppercase">Profile</label>
                <input
                  required
                  value={picture}
                  onChange={(e) => {
                    setPicture(e.target.value);
                  }}
                  className="md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black"
                  type="text"
                  placeholder="upload your picture url"
                />
              </div>
              <div className="flex flex-col my-6">
                <label className="text-xs font-bold uppercase">password</label>
                <input
                  required
                  autoComplete="true"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-slate-300 text-slate-900 px-[16vw] rounded-md py-5"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
