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
      <img src={logo} alt="logo" className="ml-[10rem] md:ml-[5rem] sm:ml-3  " />
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
                  value={email}
                  onChange={getEmail}
                />
              </div>

              <div className="flex flex-col gap-[.5rem] relative ">
                <label htmlFor="" className="text-[1.5rem] font-semibold ">
                  Enter PIN
                </label>
                <input
                  className="pl-[3rem] pr-[1.6rem] pt-[1.3rem] pb-[1.3rem] border-2 outline-[#2b007a] "
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
                bgclr="bg-[#4300C2] text-white  text-2xl w-full sm:w-full py-[.7rem] rounded-md "
                
              />
            
            </form>

            <div className="text-2xl flex gap-3">
              <div className="p">Don't have an account?</div>
              <div className="text-[#2b007a]">Sign Up</div>
            </div>
          </div>
        </div>

        <div className=" md:w-full">
          <img src={Loginpage} alt="" className=" lg:w-[80%] md:mt-[15rem] mt-[10rem] sm:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Login;
