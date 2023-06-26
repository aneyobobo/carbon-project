import React from "react";
import SideNav from "../../components/sideNav";
import Main from "../../components/main";


const Dashboard = () => {
  
  return (
    <div className="flex">
      <div className="w-[20%]">
        <SideNav />
      </div>

      <div className="bg-mainBG w-[80%]">
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
