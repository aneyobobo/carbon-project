import React from "react";

import Button from "../Button/Button";
import Container from "../sharedComponent/container";

const Complaints = () => {
  return (
    // <ContainerTwo>
    <Container>
      <div className="px-[5rem] py-5 mb-[5rem]">
        <div className="bg-[#2B007A] text-white py-3">
          <p className="px-[2rem] text-xl">Complaints</p>
        </div>

        <form action="#" className="font-semibold">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 my-5">
            <div className="grid grid-rows-1">
              <label htmlFor="#">Name</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter your name"
                className="px-2 py-3"
              />
            </div>

            <div className="grid grid-rows-1">
              <label htmlFor="#">Email</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter your email address"
                className=" px-2 py-3"
              />
            </div>
          </div>

          <div className="grid mb-5">
            <label htmlFor="#">Messages</label>
            <input type="text" className="h-[15rem]" />
            <div className="flex gap-2">
              <input type="checkbox" />
              <p className="">Subscribe to our Newsletters</p>
            </div>
          </div>
          <div className="flex justify-end">
          <Button
            text="Send"
            bgclr="bg-[#2B007A] text-white  text-xl px-[2.4rem] py-[.5rem] rounded-md w-[8rem] "
          />
          </div>
        </form>

        <div className="mt-[3rem]">
          <div className="bg-[#2B007A] text-white my-9  py-3">
            <p className="px-[2rem] text-xl">Frequently Asked Questions</p>
          </div>

          <div className="px-[10rem]">
            <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative">
              <input
                type="radio"
                name="faq"
                id="faq1"
                className="appearance-none peer"
              />
              <label
                for="faq1"
                className="flex items-center text-lg font-semibold cursor-pointer after:absolute after:content-['+'] after:right-5 after:text-2xl after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45"
              >
                <h3>Is Carbon a Bank</h3>
              </label>
              <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                <p className="text-[1.3rem]">
                  Carbon is a credit-led digital bank offering modern banking
                  services to ambitious, youthful, unrelenting Africans looking
                  for value and control over their finances.
                </p>
              </div>
            </div>
          </div>

          <div className="px-[10rem] mt-5">
            <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative">
              <input
                type="radio"
                name="faq"
                id="faq2"
                className="appearance-none peer"
              />
              <label
                for="faq2"
                className="flex items-center text-lg font-semibold cursor-pointer after:absolute after:content-['+'] after:right-5 after:text-2xl after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45"
              >
                <h3>Why choose Carbon? </h3>
              </label>
              <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                <p>
                  We provide a better ecosystem of services, including
                  outstanding customer support, the best pricing on banking
                  transactions, the highest savings interest rates, and
                  attractive credit rates.
                </p>
              </div>
            </div>
          </div>

          <div className="px-[10rem] mt-5">
            <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative">
              <input
                type="radio"
                name="faq"
                id="faq3"
                className="appearance-none peer"
              />
              <label
                for="faq3"
                className="flex items-center text-lg font-semibold cursor-pointer after:absolute after:content-['+'] after:right-5 after:text-2xl after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45"
              >
                <h3>Do i get an ATM Card?</h3>
              </label>
              <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                <p>Carbon is loan App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
  );
};

export default Complaints;
