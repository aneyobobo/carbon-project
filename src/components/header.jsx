import React from "react";
import chelsea from "../assets/chelsea.jpg";
import { CiSearch } from 'react-icons/ci'

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
        <div className="flex items-center gap-5">
          <div className="">
            <p className="">Zulfah</p>
            <p className="">wallet ID: 00000</p>
          </div>
          <div className="">
            <img
              src={chelsea}
              alt=""
              className="rounded-[50%] w-[4rem] h-[4rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
