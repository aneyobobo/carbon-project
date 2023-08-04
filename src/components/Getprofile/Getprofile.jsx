import React from "react";
import { useState } from "react";
import Container from "../sharedComponent/container";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Getprofile = () => {
  const [othernames, setOthernames] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDOb] = useState("");
  const [gender, setGender] = useState("");
  const [marital_status, setMarital_status] = useState("");

  const check = {
    othernames,
    surname,
    dob,
    gender,
    marital_status,
  };

//   console.log("show me:", check);

  const apiCaller = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const fetchData = await axios({
        method: "patch",
        url: "https://carbon-api-test.azurewebsites.net/api/v1/user/profile/update",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: check,
      });
      console.log("fetchData", fetchData);
      toast.success(fetchData.data.message)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="px-[5rem] sm:px-6 py-5">
        <div className=" flex justify-between items-center px-3 bg-[#2B007A] py-3 text-white text-2xl sm:text-xl  ">
          <p className="">Setting</p>
          <p className="">Profile</p>
          <p className="">Bank</p>
          <p className="">Documentation</p>
        </div>
        <form
          onSubmit={apiCaller}
          action=""
          className="font-semibold sm:font-normal text-[1.5rem] sm:text-[1rem] sm-w-full"
        >
          <div className=" grid grid-cols-2 gap-x-8 gap-y-4 ">
            <div className="grid grid-rows-1">
              <label htmlFor="title">Surname</label>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                className="px-2 py-3"
                value={check.surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-rows-1">
              <label htmlFor="firstname">Other Names</label>
              <input
                type="text"
                placeholder="Other Names"
                className=" px-2 py-3"
                value={check.othernames}
                onChange={(e) => {
                  setOthernames(e.target.value);
                }}
              />
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="title">DOB</label>
              <input
                type="text"
                placeholder="Month/Day/YY"
                className="px-2 py-3"
                value={check.dob}
                onChange={(e) => {
                  setDOb(e.target.value);
                }}
              />
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="title">Gender</label>
              <input
                type="text"
                placeholder="Gender"
                className="px-2 py-3"
                value={check.gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="title">Marital Status</label>
              <input
                type="text"
                placeholder="Marital Status"
                className="px-2 py-3"
                value={check.marital_status}
                onChange={(e) => {
                  setMarital_status(e.target.value);
                }}
              />
            </div>

          </div>

          <button>submit</button>
          <ToastContainer/>
        </form>
      </div>
    </Container>
  );
};

export default Getprofile;
