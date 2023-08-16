import React from "react";
import logo from "../../assets/carbon.png";
import signup from "../../assets/signup.png";
import Button from "../Button/Button";
import { useState } from "react";
import axios from "axios";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignupContext, useTargetsetState } from "../context/context";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const signupData = useSignupContext();
  // console.log(signupData)

  const {
    getSurname,
    getOthernames,
    getPhone,
    getPassword,
    getRepeatPassword,
    getEmail,
    getDob,
    getGender,
  } = useTargetsetState();

  // console.log(useTargetsetState())

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (
        !signupData.surname ||
        !signupData.othernames ||
        !signupData.email ||
        !signupData.password ||
        !signupData.phone ||
        !signupData.repeat_password ||
        !signupData.dob ||
        !signupData.gender
      ) {
        throw new Error("pls inputs all fields");
      }

      if (signupData.password !== signupData.repeat_password) {
        toast.error("pls password and repeat password must match");
      }

      if (signupData.password.length < 6) {
        // throw new Error("password less than 6 character");
        return "password less than 6"
      }

      setLoading(true);
      setDisabled(true);

      const register = await axios.post(
        "https://carbon-api-test.azurewebsites.net/api/v1/user/register",

        signupData
      );

      // console.log(signupData);
      


      setLoading(false);
      setDisabled(false);

      console.log(register);

      toast.success("Carbon Account Created Successfully");

      navigate("/otp");
    } catch (error) {
      console.log("niyi", error);

      setLoading(false);
      setDisabled(false);

      toast.error(error || "Something went wrong");
    }
  };

  return (
    <div>
      <Link to="/">
        <button className="cursor-pointer">
          <img src={logo} alt="" className="ml-[10rem] sm:ml-[2rem]" />
        </button>
      </Link>
      <div className="flex">
        <div className="w-[50%] pl-[10rem] md:pl-0 ">
          <img
            src={signup}
            alt="signup img"
            className="py-[10rem] md:py-[13rem]  sm:hidden "
          />
        </div>

        <div className="flex flex-col gap w-[5rem] mx-[20rem] my-[15rem] md:my-[6rem] sm:mx-[-2rem] sm:my-[5rem]">
          <div className="self-center">
            <div className="text-center my-8 ">
              <h3 className="text-4xl font-medium">Sign Up for an Account</h3>
              <p className="text-[1.4rem] pt-5">
                Let's get you all set up for the Carbon experience
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-8 ">
                <div className="flex gap-9">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium">
                      Surname
                    </label>
                    <input
                      type="text"
                      placeholder="Surname"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem]  rounded-lg ring-1 ring-black text-xl"
                      value={signupData.surname}
                      onChange={getSurname}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[1rem] font-medium marker:"
                    >
                      Other Name
                    </label>
                    <input
                      type="text"
                      placeholder="Other Names"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] ring-1 ring-black text-xl rounded-lg"
                      value={signupData.othernames}
                      onChange={getOthernames}
                    />
                  </div>
                </div>

                <div className="flex gap gap-9">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem]  ring-1 ring-black text-xl rounded-lg"
                      value={signupData.email}
                      onChange={getEmail}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium ">
                      Phone
                    </label>
                    <input
                      type="phone"
                      placeholder="Phone"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] ring-1 ring-black text-xl rounded-lg"
                      value={signupData.phone}
                      onChange={getPhone}
                    />
                  </div>
                </div>

                <div className="flex gap-9 ">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium ">
                      Password
                    </label>

                    <div className="flex flex-row items-center relative">
                      <input
                        type={visible ? "text" : "password"}
                        placeholder="Password"
                        className=" pr-[5.5rem] pt-[1rem] pb-[.5rem]  ring-1 ring-black text-xl rounded-lg "
                        value={signupData.password}
                        onChange={getPassword}
                      />
                      <div className="absolute right-1">
                        {visible ? (
                          <MdVisibility
                            size={15}
                            onClick={() => {
                              setVisible(false);
                            }}
                          />
                        ) : (
                          <MdVisibilityOff
                            size={15}
                            onClick={() => {
                              setVisible(true);
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="" className="text-[1rem] font-medium ">
                      Repeat Password
                    </label>
                    <div className="flex flex-row items-center relative ">
                      <input
                        type={visible ? "text" : "password"}
                        placeholder="Password"
                        className=" pr-[5.5rem] pt-[1rem] pb-[.5rem]  ring-1 ring-black text-xl rounded-lg "
                        value={signupData.repeat_password}
                        onChange={getRepeatPassword}
                      />

                      <div className="absolute right-1">
                        {visible ? (
                          <MdVisibility
                            size={15}
                            onClick={() => {
                              setVisible(false);
                            }}
                          />
                        ) : (
                          <MdVisibilityOff
                            size={15}
                            onClick={() => {
                              setVisible(true);
                            }}
                          />
                        )}
                      </div>

                      {/* {visible ? (
                        <MdVisibilityOff
                          size={16}
                          className="absolute right-[1rem] cursor-pointer"
                          onClick={() => {
                            setVisible(!visible);
                          }}
                        />
                      ) : (
                        <div
                          onClick={() => {
                            setVisible(visible);
                          }}
                        >
                          <MdVisibility
                            size={16}
                            className="absolute right-[1rem] cursor-pointer"
                          />
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>

                <div className="flex gap-9 ">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium ">
                      DOB
                    </label>
                    <input
                      type="date"
                      placeholder="DOB"
                      className=" pr-[9rem] pt-[1rem] pb-[.5rem] ring-1 ring-black text-xl rounded-lg"
                      value={signupData.dob}
                      onChange={getDob}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium">
                      Gender
                    </label>
                    <input
                      type="text"
                      placeholder="Gender"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] ring-1 ring-black text-xl rounded-lg"
                      value={signupData.gender}
                      onChange={getGender}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="">I agree to Carbon </p>
                  <p className="text-[#2b007a]"> terms and conditions</p>
                </div>
              </div>
              <Button
                text={loading ? "... Loading" : "Create Account"}
                disabled={disabled}
                loading={loading}
                bgclr="bg-[#4300C2] text-white  text-xl px-[10rem] py-[.7rem] rounded-md sm:w-full md:w-full lg:w-full"
              />
              <ToastContainer />
            </form>

            <div className="flex gap-2">
              <p className="text-[1rem] font-medium">
                Already have an account?{" "}
              </p>
              <p className="text-[#2B007A] text-[1rem] font-medium">Log in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
