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
    <div>
      <div className="bg-frame bg-cover bg-no-repeat h-screen">
        <div className="flex flex-col items-center ">
          <img src={Logo} alt="" className="" />

          <div className="">
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <LiaHomeSolid />
              </span>
              Home
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <ImStatsBars />
              </span>
              Activity
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <LiaCreditCardSolid />
              </span>
              Bills
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <BsArrowLeftRight />
              </span>
              Transactions
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <FiMail />
              </span>
              Complaints
            </div>
            <div className="flex items-center gap-5 pt-[1rem] hover:text-white">
              <span>
                <BsGear />
              </span>
              Settings
            </div>
            <div className="flex items-center gap-5 mt-[3rem] hover:text-white">
              <span>
                <RxExit />
              </span>
              Log-out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
