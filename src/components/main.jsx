import React from "react";
// import Header from "./header";
import walletCard from "../assets/walletCard.png";
import DataTable from "react-data-table-component";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
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

  return (
    <div>
      <div className=" px-[2rem]">
        <div className="flex justify-between gap-5">
          <div className="w-[50%] my-[2rem] shadow-xl">
            <img src={walletCard} alt="walletCard" />
          </div>
          <div className="w-[50%] pb-[3rem] p-[1rem] my-[2rem] h-[20rem] rounded-lg bg-white shadow-xl">
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
