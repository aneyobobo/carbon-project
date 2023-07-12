import React from "react";
import Container from "../sharedComponent/container";
import Button from "../Button/Button";

const Settingdash = () => {
  return (
    <Container>
      <div className=" px-[5rem] sm:px-6 py-5 ">
        <div className=" flex justify-between items-center px-3 bg-[#2B007A] py-3 text-white text-2xl sm:text-xl  ">
          <p className="">Setting</p>
          <p className="">Profile</p>
          <p className="">Bank</p>
          <p className="">Documentation</p>
        </div>
        <form action="" className="font-semibold sm:font-normal text-[1.5rem] sm:text-[1rem] sm-w-full">
          <h3 className="pt-4">Basic Information</h3>
          <div className="">
            <div className=" grid grid-cols-2 gap-x-8 gap-y-4 ">
              <div className="grid grid-rows-1">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  className="px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className=" px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className="px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="maidenname">Maiden Name</label>
                <input
                  type="text"
                  name="maidenname"
                  id="maidenname"
                  placeholder="Maiden Name"
                  className="px-2 py-3"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 py-3 gap-6 sm:gap-0  ">
              <div className="grid grid-rows-1">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" className=" py-3 px-3 sm:px-0">
                  <option value="gender" className="">
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="maritalstatus">Marital Status</label>
                <select
                  name="maritalstatus"
                  id="maritalstatus"
                  className="border-2 py-3 px-3  sm:px-0"
                >
                  <option value="single" className="">
                    single
                  </option>
                  <option value="married">Married</option>
                  <option value="divorce">Divorce</option>
                </select>
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="Date of Birth">Date of Birth</label>
                <input
                  type="text"
                  name="Date of Birth"
                  id="Date of Birth"
                  placeholder="01/01/1886"
                  className="border-2 px-2 py-3 sm:px-0"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="Religion">Religion</label>
                <select
                  name="Religion"
                  id="Religion"
                  className="border-2 py-3 px-3"
                >
                  <option value="gender" className="">
                    Religion
                  </option>
                  <option value="male">Islamic</option>
                  <option value="female">Christianity</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" ">
            <h4 className="py-4">Contact Information</h4>
            <div className="grid grid-cols-2  gap-5">
              <div className="grid grid-rows-1">
                <label htmlFor="phonenumber">Phone Number</label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Phone Number"
                  className=" px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className=" px-2 py-3"
                />
              </div>
            </div>
            <div className="grid grid-rows-1 pt-3">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Address"
                className=" px-2 py-3"
              />
            </div>
            <div className=" grid grid-cols-2 gap-x-8 gap-y-4  pt-3">
              <div className="grid grid-rows-1">
                <label htmlFor="stateoforigin">State of Origin</label>
                <input
                  type="text"
                  name="stateoforigin"
                  id="stateoforigin"
                  placeholder="State of Origin"
                  className="px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="localgovtarea">LGA</label>
                <input
                  type="text"
                  name="localgovtarea"
                  id="localgovtarea"
                  placeholder="LGA"
                  className=" px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="hometown">Home Town</label>
                <input
                  type="text"
                  name="hometown"
                  id="hometown"
                  placeholder=""
                  Home
                  Town
                  className="px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="Nationality">Nationality</label>
                <input
                  type="text"
                  name="Nationality"
                  id="Nationality"
                  placeholder="Nationality"
                  className="px-2 py-3"
                />
              </div>
            </div>
          </div>
          <div className=" ">
            <h4 className="py-4">Next of Kin</h4>
            <div className="grid grid-cols-2  gap-5">
              <div className="grid grid-rows-1">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className=" px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className=" px-2 py-3"
                />
              </div>
            </div>
            <div className="grid grid-rows-1 pt-3">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Address"
                className=" px-2 py-3"
              />
            </div>
            <div className="grid grid-cols-2  gap-5">
              <div className="grid grid-rows-1">
                <label htmlFor="Relationship">Relationship</label>
                <input
                  type="text"
                  name="Relationship"
                  id="Relationship"
                  placeholder="Relationship"
                  className=" px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className=" px-2 py-3"
                />
              </div>
            </div>
          </div>
          <div className=" py-3 ">
            <h4>Empolyment</h4>
            <div className="grid grid-cols-2  gap-5 pt-3">
              <div className="grid grid-rows-1">
                <label htmlFor="Occupation">Occupation</label>
                <input
                  type="text"
                  name="Occupation"
                  id="Occupation"
                  placeholder="Occupation"
                  className=" px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="Employer">Employer</label>
                <input
                  type="text"
                  name="Employer"
                  id="Employer"
                  placeholder="Employer"
                  className=" px-2 py-3"
                />
              </div>
            </div>
            <div className="grid grid-rows-1 pt-3">
              <label htmlFor=" Employer's Address">Employer's Address </label>
              <input
                type="text"
                name="Employer's Address"
                id="Employer's Address"
                placeholder=" Employer's Address"
                className=" px-2 py-3"
              />
            </div>
          </div>
          <div className="pt-3">
            <h4>Identity</h4>
            <div className="grid grid-cols-2  gap-5 pt-3">
              <div className="grid grid-rows-1">
                <label htmlFor="BVN">BVN</label>
                <input
                  type="text"
                  name="BVN"
                  id="BVN"
                  placeholder="BVN"
                  className=" px-2 py-3"
                />
              </div>
              <div className="grid grid-rows-1">
                <label htmlFor="I.D Number">I.D Number</label>
                <input
                  type="text"
                  name="I.D Number"
                  id="I.D Number"
                  placeholder="I.D Number"
                  className=" px-2 py-3"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              text="Submit"
              bgclr="bg-[#2B007A] text-white px-[2.4rem] py-[.5rem] rounded-md mt-3"
            />
          </div>
          
        </form>
      </div>
    </Container>
  );
};

export default Settingdash;
