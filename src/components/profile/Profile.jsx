import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../sharedComponent/container";
import { useNavigate } from "react-router-dom";

const Profile = () => {
 
  const [profile, setProfile] = useState({});
  
  const apiCaller =  async () => {
    try {
      const token = localStorage.getItem("token");
      const callApi = await axios({
        method: "GET",
        url: "https://carbon-api-test.azurewebsites.net/api/v1/user/profile",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(callApi);
      setProfile(callApi.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    apiCaller()
  }, []);

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
          action=""
          className="font-semibold sm:font-normal text-[1.5rem] sm:text-[1rem] sm-w-full"
        >
          <div className=" grid grid-cols-2 gap-x-8 gap-y-4 ">
            <div className="grid grid-rows-1">
              <label htmlFor="title">Surname</label>
              <div>{profile.surname}</div>
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="firstname">Other Names</label>
              <div className="">{profile.othernames}</div>
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="title">DOB</label>
              <div>{profile.dob?.slice(0,10)}</div>
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="title">Gender</label>
              <div>{profile.gender}</div>
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="title">E-mail</label>
              <div>{profile.email}</div>
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="title">Marital Status</label>
              <div>{profile.marital_status}</div>
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="title">Phone</label>
              <div>{profile.phone}</div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </Container>
  );
};
export default Profile;
