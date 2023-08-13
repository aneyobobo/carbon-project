import React, { useEffect, useState } from "react";
// import Header from "./header";
import { MdOutlineAddCard } from "react-icons/md";
import { BsSendCheck } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import walletCard from "../assets/walletCard.png";
import DataTable from "react-data-table-component";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useSignupContext, useTargetsetState } from "./context/context";
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
    {
      id: 7,
      name: "Beetlejuice",
      date: "2023",
      amount: "1000",
      type: "1988",
    },
    {
      id: 8,
      name: "Ghostbusters",
      date: "2023",
      amount: "1000",
      type: "vdvdvd",
    },
    {
      id: 9,
      name: "Beetlejuice",
      date: "2023",
      amount: "1000",
      type: "1988",
    },
    {
      id: 10,
      name: "Ghostbusters",
      date: "2023",
      amount: "1000",
      type: "vdvdvd",
    },
  ];

  const [wallet, setWallet] = useState("");

  const apiCaller = async () => {
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
    apiCaller();
  }, []);

  return (
    <div>
      <div className=" px-[2rem] ">
        <div className="flex sm:flex-col justify-between gap-5 align-middle">
          <div className="w-[50%] sm:w-full my-[2rem] shadow-xl p-5 px-12">
            <div className="flex justify-center flex-col">
              {/* <img src={walletCard} alt="walletCard" />  */}
              <div
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "#5832a8" }}
              >
                <p className="text-center text-3xl text-white">
                  Wallet Balance (NGN)
                </p>
                <p className="text-4xl font-bold text-center text-white mt-4">
                  {wallet}
                </p>
              </div>

              <div className="flex gap-32 mt-6 items-center justify-center">
                <div
                  className="h-[60px] w-[60px] flex items-center justify-center rounded-full flex-col cursor-pointer"
                  rounded-full
                  style={{ backgroundColor: "#5832a8" }}
                >
                  <MdOutlineAddCard size={26} color="white" />
                  <p className="text-white font-bold">Top Up</p>
                </div>

                <div
                  className="h-[60px] w-[60px] flex items-center justify-center rounded-full flex-col cursor-pointer"
                  rounded-full
                  style={{ backgroundColor: "#5832a8" }}
                >
                  <BsSendCheck size={26} color="white" />
                  <p className="text-white font-bold">Send</p>
                </div>

                <div
                  className="h-[60px] w-[60px] flex items-center justify-center rounded-full flex-col cursor-pointer"
                  rounded-full
                  style={{ backgroundColor: "#5832a8" }}
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
