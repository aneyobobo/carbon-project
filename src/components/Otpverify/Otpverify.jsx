import { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import Button from "../Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Otpverify = () => {
  const [otp, setOtp] = useState("");
  const email = "cojiver147@kameili.com";




  function sendOtp() {
    axios.patch(
        `https://carbon-api-test.azurewebsites.net/api/v1/user/verify/${otp}/${email}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);   
      });
  }



  return (
    <div className="flex justify-center items-center bg-verifyBG bg-cover bg-no-repeat h-screen">
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-4xl font-medium mb-[1.2rem]">Verify OTP</h3>
        <p className="text-[1.4rem] mb-3">
          Please enter the 6-digits OTP sent to your email
        </p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType={setOtp}
          inputStyle={{
            width: "4rem",
            height: "4rem",
            border: "1px solid grey",
          }}
          isInputNum={true}
          renderSeparator={<span> - </span>}
          renderInput={(props) => <input {...props} />}
        />

        <Button
          text="Verify OTP"
          bgclr="bg-[#4300C2] text-white text-xl px-[2.4rem] py-[.7rem] rounded-md mt-5"
          onClick={sendOtp}
        />

      </div>
    </div>
  );
};

export default Otpverify;
