import React, { useContext, useEffect } from "react";
import logo from "../../assets/carbon.png";
import Button from "../Button/Button";
import Loginpage from "../../assets/loginpage.png";
import { useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSignupContext, useTargetsetState } from "../context/context";


const Login = () => {
  
  const [visible, setVisible] = useState(false);

  const loginData = useSignupContext()

  const {getEmail,getPassword} = useTargetsetState()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const login = await axios.post(
        "https://carbon-api-test.azurewebsites.net/api/v1/user/login",
        
        loginData
      );
      console.log(login);
      localStorage.setItem("token", login.data.token);
      // toast.success(login.data.message);
      navigate("/dashboard")
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log("niyi",error);
    }

  
  };

  return (
    <div className="">
      <Link to='/'>
      <button className="cursor-pointer"><img
        src={logo}
        alt="logo"
        className="ml-[10rem] md:ml-[5rem] sm:ml-3  "
      /></button>
      </Link>
      <div className="flex  w-full gap-[10rem]  md:gap-[1rem] sm:gap-[3rem]">
        <div className="w-[65rem] md:w-full md:ml-[5rem] sm:w-full mt-[12rem]  sm:ml-9 sm:mt-[6rem] mb-[18rem] sm:mb-[9rem]">
          <div className="px-[10rem] md:px-[2rem] sm:px-[3rem] py-[2rem] sm:py-[1rem]">
            <h3 className="text-[3rem] md:text-[2.5rem] sm:text-[2.5rem] font-semibold text-center my-[1rem]">
              Log in to your Account
            </h3>
            <p className="my-[1rem] text-center text-[1.7rem] md:text-[1.2rem] sm:text-[1.2rem]">
              Log in to you Account to continue the Carbon experience
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4 gap-[.5rem] ">
                <label htmlFor="" className="text-[1.5rem] font-semibold">
                  Enter Email
                </label>
                <input
                  className="pl-[3rem] pr-[1.6rem] pt-[1.3rem] pb-[1.3rem] border-2 outline-[#2b007a]"
                  type="email"
                  placeholder="Enter Email Address"
                  value={loginData.email}
                  onChange={getEmail}
                  required
                />
              </div>

              <div className="flex flex-col gap-[.5rem] relative ">
                <label htmlFor="" className="text-[1.5rem] font-semibold ">
                  Enter Password
                </label>
                <input
                  className="pl-[3rem] pr-[1.6rem] pt-[1.3rem] pb-[1.3rem] border-2 outline-[#2b007a] "
                  type={visible ? "text" : "password"}
                  placeholder="Enter Password"
                  value={loginData.password}
                  onChange={getPassword}
                  required
                />
                <div className="absolute right-1 bottom-5">
                  {visible ? (
                    <LiaEyeSolid onClick={() => setVisible(false)} size={20} />
                  ) : (
                    <BsFillEyeSlashFill
                      onClick={() => setVisible(true)}
                      size={20}
                    />
                  )}
                </div>
              </div>

              <div className="flex gap-2 text- mt-4 my-5">
                <input type="checkbox" />
                <p className="">Forgot Password</p>
              </div>

              {/* <Link to='/dashboard'> */}
              <Button
                className=""
                text="Login in"
                bgclr="bg-[#4300C2] text-white  text-2xl w-full sm:w-full py-[.7rem] rounded-md "
              />
              {/* </Link> */}

              <ToastContainer />
            </form>

            <div className="text-2xl flex gap-3">
              <div className="p">Don't have an account?</div>
              <div className="text-[#2b007a]"><Link to='/signup'> Sign Up</Link></div>
            </div>
          </div>
        </div>

        <div className=" md:w-full">
          <img
            src={Loginpage}
            alt=""
            className=" lg:w-[80%] md:mt-[15rem] mt-[10rem] sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
