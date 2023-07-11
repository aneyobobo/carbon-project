import React from "react";
import Logo from "../assets/Logo.png";
import { LiaHomeSolid } from "react-icons/lia";
import { ImStatsBars } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { BsArrowLeftRight } from "react-icons/bs";
import { LiaCreditCardSolid } from "react-icons/lia";
import { BsGear } from "react-icons/bs";
import { RxExit } from "react-icons/rx";

const SideNav = () => {
  return (
    
      <div className="bg-frame bg-cover bg-no-repeat h-[100%]">
        <div className="flex flex-col items-center ">
          <img src={Logo} alt="" className="" />

          <div className="text-[2rem] ">
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <LiaHomeSolid />
              </span>
              <p className="sm:hidden">Home</p>
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <ImStatsBars />
              </span>
              <p className="sm:hidden">Activity</p>
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <LiaCreditCardSolid />
              </span>
              <p className="sm:hidden">Bills</p>
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <BsArrowLeftRight />
              </span>
              <p className="sm:hidden">Transactions</p>
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <FiMail />
              </span>
              <p className="sm:hidden">Compliants</p>
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <BsGear />
              </span>
              <p className="sm:hidden">Settings</p>
            </div>
            <div className="flex items-center gap-5 mt-[3rem] hover:text-white">
              <span>
                <RxExit />
              </span>
              <p className="sm:hidden">Log Out</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SideNav;
