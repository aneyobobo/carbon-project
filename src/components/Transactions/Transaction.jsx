import React from "react";
import DataTable from "react-data-table-component";
// import { Doughnut } from "react-chartjs-2";



const Transaction = () => {
  

  const customStyles = {
    rows: {
      style: {
        minHeight: "35px", // override the row height
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
      name: "Folashade Elemide",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Credit",
    },
    {
      id: 2,
      name: "Folashade Elemide",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Credit",
    },
    {
      id: 3,
      name: "Folashade Elemide",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Credit",
      
    },
    {
      id: 4,
      name: "Folashade Elemide",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Debit",
    },
    {
      id: 5,
      name: "Folashade Elemide",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Credit",
    },
    {
      id: 6,
      name: "Netflix",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Debit",
    },
    {
      id: 7,
      name: "Netflix",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Debit",
    },
    {
      id: 8,
      name: "Mariam",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Credit",
    },
    {
      id: 9,
      name: "Netflix",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Debit",
    },
    {
      id: 10,
      name: "Netflix",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Debit",
    },
    {
      id: 11,
      name: "Glo Airtime",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Credit",
    },
    {
      id: 12,
      name: "Chinedu",
      date: "1/1/1996",
      amount: "1000.00",
      type: "Debit",
    }
    
  ];

  return (
    <div className="px-[5rem] ">
     <div className="flex justify-between bg-[#600AFF] text-white py-[1rem] px-[2rem]   ">
      <h4 className="text-[1.8rem] font-normal">Transactions</h4>
      <p className="text-[1.6rem] font-normal">Filter by </p>
      
     </div>

      <div className="mt-[3rem] mb-[8rem] ">
        <DataTable 
          columns={columns}
          data={data}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default Transaction;
