import React from "react";
import logo from "../../assets/carbon.png";
import signup from "../../assets/signup.png";
import Button from "../Button/Button";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [surname, setSurname] = useState("");
  const [othernames, setothernames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setrepeat_password] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const getSurname = (e) => {
    setSurname(e.target.value);
  };

  const getotherName = (e) => {
    setothernames(e.target.value);
  };

  const getPhone = (e) => {
    setPhone(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const getrepeat_password = (e) => {
    setrepeat_password(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getDob = (e) => {
    setDob(e.target.value);
  };

  const getGender = (e) => {
    setGender(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!surname || !othernames || !email || !password || !phone || !repeat_password || password !== repeat_password || !dob || !gender){
      throw new Error ('pls fill the inputs')
    }

    axios.post('https://carbon-api-test.azurewebsites.net/api/v1/user/register', {
      surname,
      othernames,
      email,
      password,
      repeat_password,
      phone,
      dob,
      gender
    }).then((response)=>{
      console.log(response.data)
    }).catch((err)=>{console.log(err)})

  };

  console.log(surname, othernames, email, phone, dob, gender, password, repeat_password);

  return (
    <div>
      <img src={logo} alt="" className="ml-[10rem] sm:ml-[2rem]" />
      <div className="flex">
        <div className="w-[50%] pl-[10rem] md:pl-0 ">
          <img
            src={signup}
            alt=""
            className="py-[10rem] md:py-[13rem]  sm:hidden "
          />
        </div>

        <div className="flex flex-col gap w-[5rem] mx-[20rem] my-[15rem] md:my-[10rem] sm:mx-[-2rem] sm:my-[5rem]">
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
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={surname}
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
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={othernames}
                      onChange={getotherName}
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
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={email}
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
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={phone}
                      onChange={getPhone}
                    />
                  </div>
                </div>

                <div className="flex gap-9 ">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium ">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={password}
                      onChange={getPassword}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium">
                      Repeat-password
                    </label>
                    <input
                      type="password"
                      placeholder="Repeat-password"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={repeat_password}
                      onChange={getrepeat_password}
                    />
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
                      className=" pr-[8rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={dob}
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
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={gender}
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
                text="Create Account"
                bgclr="bg-[#4300C2] text-white  text-xl px-[10rem] py-[.7rem] rounded-md sm:w-full md:w-full lg:w-full"
              />

              {/* <input type="submit" value="submit" /> */}
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
