import React, { useState } from "react";
import sign from "../img/sign.png";
import { axiosCall } from "../api/network";
import { signUp } from "../api/url";
import axios from "axios";
import { Toast } from "../../Toast/Toast";
import { Alert } from "../Toastify/Toast";
import { useNavigate } from "react-router-dom";
import { useContexts } from "../shared/Context";
// import axios from "axios";

const SignupCarbon = () => {
  const [surname, setSurname] = useState("");
  const [othernames, setOthernames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeat] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    try {
      e.preventDefault();

      if (
        !surname ||
        !othernames ||
        !email ||
        !password ||
        !repeat_password ||
        !phone ||
        !dob ||
        !gender ||
        password !== repeat_password
      ) {
        throw new Error("Please enter all fields");
      }

      const register = await axios.post(
        "https://carbon-api-test.azurewebsites.net/api/v1/user/register",
        {
          surname,
          othernames,
          email,
          password,
          repeat_password,
          phone,
          dob,
          gender,
        }
      );

      // if(register.data.status === true){

      localStorage.setItem("", JSON.stringify(email));
      navigate("/otp");
      // }else {

      //   Alert('error',register.response.data.status )
      // }
      console.log("success", register);
    } catch (error) {
      console.log("This error:", error);
      Alert("error", error.message);
    }
  }

  return (
    <div className="flexflex-col w-full h-screen ">
      <div className="text-[4rem] font-extrabold text-purple-700 px-[2rem] ">
        Carbon
      </div>

      <div className="flex justify-between ">
        <img src={sign} alt="" />
        <div className=" flex flex-col w-[50%]">
          <div className="">
            <h1 className="">Sign Up for an Account</h1>
            <p className="">
              Let’s get you all set up for the Carbon experience
            </p>
          </div>

          <form onSubmit={submit}>
            <div className="flex gap-x-[4rem] mt-[3rem] ">
              <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                  Surname
                </label>
                <input
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  placeholder="surname"
                  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>

              <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                  Other Name
                </label>
                <input
                  value={othernames}
                  onChange={(e) => setOthernames(e.target.value)}
                  type="text"
                  placeholder="other name"
                  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>
            </div>
            <div className="flex gap-x-[4rem] mt-[3rem] ">
              <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email address"
                  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>

              <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="password"
                  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>
            </div>
            <div className="flex gap-x-[4rem] mt-[3rem] ">
              <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                  Repeat Password
                </label>
                <input
                  value={repeat_password}
                  onChange={(e) => setRepeat(e.target.value)}
                  type="text"
                  placeholder="repeat password"
                  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>
              <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="number"
                  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                  //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
            </div>
            <div className="flex gap-x-[4rem] mt-[3rem] ">
              <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                  Date of Birth
                </label>
                <input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>

              <div className="">
                <label className="text-[1.5rem] block" htmlFor="">
                  Gender
                </label>
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  type="text"
                  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
                {/* 
                <select value={gender} onChange={(e) => setGender(e.target.value)}  className="w-[35rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 ">
                    <option  className="">Male</option>
                    <option  className="">Female</option>
                </select> */}
              </div>
            </div>

            <button className="mt-[3rem] text-[2rem] text-center text-white font-semibold w-[50rem] bg-blue-600 rounded-lg px-[1rem] py-[1rem] ">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupCarbon;
