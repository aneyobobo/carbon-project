import React from "react";
import chelsea from "../assets/chelsea.jpg";
import { CiSearch } from 'react-icons/ci'
import {FaUserEdit} from "react-icons/fa"
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <div>
      <div className="bg-white flex gap-5 items-center justify-end h-[5rem] p-3">
        <div className="flex items-center rounded-[3rem] p-[.5rem] border">
          <CiSearch />
          <input
            type="search"
            className="border-none rounded-[3rem] h-[1rem] p-3 outline-none"
            placeholder="search"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <Link to="/profile">
            <div className="flex flex-col items-center border-2  rounded-xl bg-[#2b007a] cursor-pointer">
              <FaUserEdit size={20} color="white" />
              <p className="text-md text-white ">Profile</p>
            </div>
          </Link>
          <div className="">
            <p className="">Zulfah</p>
            <p className="">wallet ID: 00000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
