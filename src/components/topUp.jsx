import React from "react";
import { useSignupContext, useTargetsetState } from "./context/context";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import { MdOutlinePayment } from "react-icons/md";


const Send = () => {

  
  const [amount, setAmount] = useState("");
  const [walletid, setWalletid]= useState("")

  function getWalletid(e) {
    setWalletid(e.target.value);
  }
  function getAmount(e) {
    setAmount(e.target.value);
  }

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
          walletid,
          amount,
        },
      });
      console.log(caller);
      console.log(walletid,amount);
      // navigate(caller.data.data.authorization_url);
    } catch (error) {
      console.log(error);
    }
  };

 


  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col items-center border-2 border-amber-600 rounded-3xl px-10 py-[3rem]"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center bg-gray-500 h-[8rem] w-[8rem] rounded-full">
          <MdOutlinePayment size={50} color="white" />
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-5xl font-bold text-center pt-5">
            Send to a Carbon Wallet
          </p>
          <p className="text-3xl font-normal text-center pb-4   ">
            Send money to another Carbon account
          </p>
        </div>

        <div className="flex flex-col w-full gap-3">
          <label className="text-xl font-medium " htmlFor="">
            Amount
          </label>
          <input
            className="py-3 px-3 ring-1 ring-black text-xl"
            type="text"
            value={amount}
            onChange={getAmount}
          />

          <label className="text-xl font-medium " htmlFor="">
            Wallet I.D
          </label>
          <input
            className="py-3 px-3 ring-1 ring-black text-xl"
            type="text"
            value={walletid}
            onChange={getWalletid}
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
        <div className="flex gap-2 pt-3 text-3xl">
          <p className="">Your withdrawal limit is</p>
          <p className=" text-red-600">N50,000</p>
        </div>
      </form>
    </div>
  );
};

export default Send;
