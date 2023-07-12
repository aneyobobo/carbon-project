import logo from "../../assets/carbon.png";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import "animate.css";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
  };
  return (
    <div className="flex sm:flex-wrap justify-between items-center  px-[10rem] sm:px-0 md:px-10  py-[2rem] text-[1.4rem] sm:text-[1rem] fixed top-0 w-full">
      <img src={logo} alt="logo" className="sm:w-[14rem]  sm:pl-3" />

      <div className="sm:pr-3 ">
      <button onClick={handleClick}>
        {toggled ? (
          <MdOutlineCancel className="text-[3rem] lg:hidden md:hidden" />
        ) : (
          <GiHamburgerMenu className="text-[3rem] lg:hidden md:hidden" />
        )}
      </button>
      </div>

      <div
        className={`${
          toggled ? "block animate__animated animate__fadeInLeft" : "hidden"
        }  lg:flex sm:bg-[#4300C2]  sm:h-screen md:flex lg:gap-[37rem] md:gap-[2rem] sm:w-full gap-[4rem] sm:gap-5 sm:flex-col `}
      >
        <div className="flex sm:flex-col  pr-[10rem] lg:gap-x-[6rem] sm:gap-y-[2rem] md:gap-10 lg:text-[#4300C2] md:text-[#4300C2]  sm:text-white sm:pl-10 sm:my-[5rem] sm:text-[2rem]">
          <p className="">Home</p>
          <p className="">Product</p>
          <p className="">Contact Us</p>
        </div>
        <div className="flex sm:flex gap-[1.8rem] sm:text-xl sm:font-bold items-center sm:pl-10">
          <Button
            text="Login"
            bgclr="bg-white text-[#4300C2]  px-[2.4rem] py-[.6rem] rounded-md"
          />

          <Button
            text="Sign Up"
            bgclr="bg-white text-[#4300C2]  px-[2.4rem] py-[.6rem] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
