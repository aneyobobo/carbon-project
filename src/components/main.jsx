import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineAddCard } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsSendCheck } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import DataTable from "react-data-table-component";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);

const Main = () => {
  const dataChart = {
    labels: ["Food", "Internet", "Transport", "Savings", "Loan"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "55px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Beetlejuice",
      date: "2023",
      amount: "1000",
      type: "1988",
    },
    {
      id: 2,
      name: "Ghostbusters",
      date: "2023",
      amount: "1000",
      type: "vdvdvd",
    },
    {
      id: 3,
      name: "Beetlejuice",
      date: "2023",
      amount: "1000",
      type: "1988",
    },
    {
      id: 4,
      name: "Ghostbusters",
      date: "2023",
      amount: "1000",
      type: "vdvdvd",
    },
    {
      id: 5,
      name: "Beetlejuice",
      date: "2023",
      amount: "1000",
      type: "1988",
    },
    {
      id: 6,
      name: "Ghostbusters",
      date: "2023",
      amount: "1000",
      type: "vdvdvd",
    },
  ];

  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [walletid, setWalletid] = useState("");
  const [receivingaccount, setReceivingaccount] = useState("")

  const [topUp, setTopUp] = useState(false);
  const [send, setSend] = useState(false);
  const [withdraw, setWithdraw] = useState(false)

  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getAmount(e) {
    setAmount(e.target.value);
  }

  function getWalletid(e) {
    setWalletid(e.target.value);
  }

  console.log(walletid, amount, email);

  const apiCallerForTopup = async () => {
    const token = localStorage.getItem("token");
    try {
      const caller = await axios({
        method: "get",
        url: "https://carbon-api-test.azurewebsites.net/api/v1/wallet/balance",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(caller);
      setWallet(caller.data.balance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCallerForTopup();
  }, []);

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
      window.location.href = caller.data.data.authorization_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" px-[2rem]">
        <div className="flex sm:flex-col justify-between gap-5 align-middle">
          <div className="w-[50%] sm:w-full my-[2rem] shadow-xl p-5 px-10">
            {topUp && (
              <div className="absolute modal z-50 top-0 left-0 w-[100%] h-[100%] backdrop-blur-sm ">
                <div className="flex justify-center items-center ">
                  <form
                    className="flex flex-col items-center border-2 relative bg-white top-[15rem] rounded-3xl px-10 py-10"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex justify-center items-center bg-gray-500 h-[8rem] w-[8rem] rounded-full">
                      <MdOutlinePayment size={50} color="white" />
                    </div>
                    <div
                      className="h-10 w-10 rounded-full absolute border-2 border-gray-400 flex items-center justify-center top-2 right-2 cursor-pointer"
                      onClick={() => setTopUp(false)}
                    >
                      <IoMdClose size={24} color="gray" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="text-5xl font-bold text-center">
                        Top up your wallet
                      </p>
                      <p className="text-3xl font-normal text-center pb-4   ">
                        Top up your wallet from your Bank
                      </p>
                    </div>

                    <div className="flex flex-col w-full gap-3">
                      <label className="text-xl font-medium " htmlFor="">
                        Email
                      </label>
                      <input
                        className="py-3 px-3 ring-1 ring-black text-xl"
                        type="text"
                        value={email}
                        onChange={getEmail}
                      />
                      <label className="text-xl font-medium " htmlFor="">
                        Amount
                      </label>
                      <input
                        className="py-3 px-3 ring-1 ring-black text-xl"
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
              </div>
            )}

            {send && (
              <div className="absolute modal z-50 top-0 left-0 w-[100%] h-[100%] backdrop-blur-sm">
                <div className="flex justify-center  ">
                  <form
                    className="flex flex-col items-center border-2 relative bg-white top-[15rem] rounded-3xl px-10 py-10"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex justify-center items-center bg-gray-500 h-[8rem] w-[8rem] rounded-full ">
                      <MdOutlinePayment size={50} color="white" />
                    </div>

                    <div
                      className="h-10 w-10 rounded-full absolute border-2 border-gray-400 flex items-center justify-center top-2 right-2 cursor-pointer"
                      onClick={() => setSend(false)}
                    >
                      <IoMdClose size={24} color="gray" />
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
              </div>
            )}

            {withdraw && (
              <div className="absolute modal z-50 top-0 left-0 w-[100%] h-[100%] backdrop-blur-sm">
                <div className="flex justify-center  ">
                  <form
                    className="flex flex-col items-center border-2 relative bg-white top-[15rem] rounded-3xl px-10 py-10"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex justify-center items-center bg-gray-500 h-[8rem] w-[8rem] rounded-full ">
                      <MdOutlinePayment size={50} color="white" />
                    </div>

                    <div
                      className="h-10 w-10 rounded-full absolute border-2 border-gray-400 flex items-center justify-center top-2 right-2 cursor-pointer"
                      onClick={() => setWithdraw(false)}
                    >
                      <IoMdClose size={24} color="gray" />
                    </div>

                    <div className="flex flex-col gap-5">
                      <p className="text-5xl font-bold text-center pt-5">
                        Withdrawal from Wallet
                      </p>
                      <p className="text-3xl font-normal text-center pb-4   ">
                        Withdraw from wallet into your bank account
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
                        Receiving Account
                      </label>
                      <input
                        className="py-3 px-3 ring-1 ring-black text-xl"
                        type="text"
                        value={receivingaccount}
                        onChange={setReceivingaccount}
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
              </div>
            )}

            <div className="flex justify-center flex-col">
              <div className="p-8 rounded-3xl bg-[#5832a8]">
                <p className="text-center text-3xl text-white">
                  Wallet Balance (NGN)
                </p>
                <p className="text-4xl font-bold text-center text-white mt-4">
                  {wallet}
                </p>
              </div>

              <div className="flex gap-32 mt-6 items-center justify-center">
                <div
                  className="h-[60px] w-[60px] flex items-center justify-center rounded-full flex-col bg-[#5832a8] cursor-pointer"
                  onClick={() => setTopUp(!topUp)}
                >
                  <MdOutlineAddCard size={26} color="white" />
                  <p className="text-white font-bold">Top Up</p>
                </div>

                <div
                  className="h-[60px] w-[60px] flex items-center justify-center rounded-full flex-col bg-[#5832a8] cursor-pointer"
                  onClick={() => setSend(!send)}
                >
                  <BsSendCheck size={26} color="white" />
                  <p className="text-white font-bold">Send</p>
                </div>

                <div
                  className="h-[60px] w-[60px] flex items-center justify-center rounded-full flex-col bg-[#5832a8] cursor-pointer "
                  onClick={() => setWithdraw(!withdraw)}
                >
                  <MdPayment size={26} color="white" />
                  <p className="text-white font-bold">Withdraw</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] sm:w-full pb-[3rem] p-[1rem] sm:my-0 my-[2rem] h-[20rem] rounded-lg bg-white shadow-xl">
            <p className="text-lg font-bold">Carbon Stats</p>
            <Doughnut
              data={dataChart}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
        <div className="my-[4rem] hover:bg-[#d7ecfb]">
          <DataTable
            className="bg-red-700"
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
