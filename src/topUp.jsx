import React from "react";
import { useSignupContext, useTargetsetState } from "./components/context/context";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button/Button";
import { MdOutlinePayment } from "react-icons/md";

const TopUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getAmount(e) {
    setAmount(e.target.value);
  }

  console.log(email, amount);

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    try {
      e.preventDefault();
      const caller = await axios({
        method: "post",
        url: "https://carbon-api-test.azurewebsites.net/api/v1/wallet/start",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        data: {
          email,
          amount,
        },
      });
      console.log(caller);
      //    navigate("/https://checkout.paystack.com/bjq9eq21bwb06y5")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        action=""
        className="flex flex-col items-center border-2 border-amber-600 rounded-3xl px-9"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center bg-gray-500 h-[8rem] w-[8rem] rounded-full">
          <MdOutlinePayment size={50} color="white" />
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-4xl font-bold text-center">Top up your wallet</p>
          <p className="text-3xl font-normal text-center pb-4   ">
            Top up your wallet from your Bank
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-xl font-medium " htmlFor="">
            Email
          </label>
          <input
            className="py-4 pr-[20rem] "
            type="text"
            value={email}
            onChange={getEmail}
          />
          <label className="text-xl font-medium " htmlFor="">
            Amount
          </label>
          <input
            className="py-4 pr-[20rem]"
            type="text"
            value={amount}
            onChange={getAmount}
          />
        </div>

        <div className="flex gap-10 font-bold pt-5">
          <Button
            text="Proceed"
            bgclr="bg-[#dbd9dd] border-2 border-[#2b007a] text-[#2b007a] text-2xl w-full sm:w-full py-[.8rem] px-[1rem] rounded-md"
            onSubmit={handleSubmit}
          />
          <Button
            text="Cancel"
            bgclr="bg-[#4300C2] text-white  text-2xl w-full sm:w-full py-[.5rem] px-[2rem] rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default TopUp;
