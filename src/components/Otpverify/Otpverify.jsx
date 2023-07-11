import { useState } from "react";
import OTPInput from "react-otp-input";

import React from "react";
import Button from "../Button/Button";

const Otpverify = () => {
  const [otp, setOtp] = useState(0)
  return (
    <div className="flex justify-center items-center bg-verifyBG bg-cover bg-no-repeat h-screen">
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-4xl font-medium mb-[1.2rem]">Verify E-mail</h3>
        <p className="text-[1.4rem] mb-3">
          Please enter the 6-digits OTP sent to aneyobobo@yahoo.com
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType={setOtp}
          inputStyle={{width:'4rem', height: "4rem", border: "1px solid grey"}}
          isInputNum = {true}
          renderSeparator={<span> - </span>}
          renderInput={(props) => <input {...props} />}
        />
        <Button
          text="Verify E-mail"
          bgclr="bg-[#4300C2] text-white  text-xl px-[2.4rem] py-[.7rem] rounded-md mt-5"
        />
      </div>
    </div>
  );
};

export default Otpverify;
