import React from "react";
import logo from "../../assets/carbon.png";
import Button from "../Button/Button";
import Loginpage from "../../assets/loginpage.png";
import { useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [visible, setVisible] = useState(false);

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPin = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPin("");
  };

  console.log(email, pin);
  return (
    <div className="">
      <img src={logo} alt="logo" className="ml-[10rem]  " />
      <div className="flex  w-full gap-[10rem]">
        <div className="w-[65rem] mt-[12rem] mb-[18rem]">
          <div className="px-[10rem] py-[2rem]">
            <h3 className="text-[3rem] font-semibold text-center my-[1rem]">
              Log in to your Account
            </h3>
            <p className="my-[1rem] text-center text-[1.7rem]">
              Log in to you Account to continue the Carbon experience
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4 gap-[.5rem] ">
                <label htmlFor="" className="text-[1.5rem] font-semibold">
                  Enter Email
                </label>
                <input
                  className="pl-[3rem] pr-[1.6rem] pt-[1.3rem] pb-[1.3rem] border-2"
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={getEmail}
                />
              </div>

              <div className="flex flex-col gap-[.5rem] relative ">
                <label htmlFor="" className="text-[1.5rem] font-semibold ">
                  Enter PIN
                </label>
                <input
                  className="pl-[3rem] pr-[1.6rem] pt-[1.3rem] pb-[1.3rem] border-2 "
                  type={visible ? 'text': 'password'}
                  placeholder="Enter PIN"
                  value={pin}
                  onChange={getPin}
                />
                <div className="absolute right-1 bottom-5">
                 {visible ? (<LiaEyeSolid onClick={() => setVisible(false)} size={20}/>) : (<BsFillEyeSlashFill onClick={() => setVisible(true)} size={20}/>)}
                </div>
              </div>
              <div className="flex gap-2 text- mt-4 my-5">
                <input type="checkbox" />
                <p className="">Forgot Password</p>
              </div>
              <Button
                className=""
                text="Login in"
                bgclr="bg-[#4300C2] text-white  text-2xl px-[19.5rem] py-[.7rem] rounded-md "
                
              />
              {/* <input type="Submit" Value="Submit" /> */}
            </form>

            <div className="text-2xl flex gap-3">
              <div className="p">Don't have an account?</div>
              <div className="text-[#2b007a]">Sign Up</div>
            </div>
          </div>
        </div>

        <div className="">
          <img src={Loginpage} alt="" className="w-[50rem] mt-[10rem]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
