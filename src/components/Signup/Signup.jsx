import React from "react";
import logo from "../../assets/carbon.png";
import signup from "../../assets/signup.png";
import Button from "../Button/Button";
import { useState } from "react";

const Signup = () => {
  const [surname, setSurname] = useState("");
  const [otherName, setotherName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const getSurname = (e) => {
    setSurname(e.target.value);
  };

  const getotherName = (e) => {
    setotherName(e.target.value);
  };

  const getPin = (e) => {
    setPin(e.target.value);
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
    e.preventDefault();
    setSurname("");
    setotherName("");
    setEmail("");
    setPin("");
    setDob("");
    setGender("");
  };
  console.log(surname, otherName, email, pin, dob, gender);
  return (
    <div>
      <img src={logo} alt="" className="ml-[10rem]" />
      <div className="flex">
        <div className="w-[50%] pl-[10rem]">
          <img src={signup} alt="" className="py-[10rem]" />
        </div>

        <div className="flex flex-col gap w-[5rem] mx-[20rem] my-[20rem]">
          <div className="self-center">
            <div className="text-center my-8">
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
                      placeholder="Other Name "
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={otherName}
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
                      PIN
                    </label>
                    <input
                      type="password"
                      placeholder="PIN"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
                      value={pin}
                      onChange={getPin}
                    />
                  </div>
                </div>

                <div className="flex gap-9 ">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[1rem] font-medium">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      className=" pr-[5.5rem] pt-[1rem] pb-[.5rem] border-2 rounded-lg"
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
                bgclr="bg-[#4300C2] text-white  text-xl px-[10rem] py-[.7rem] rounded-md"
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
