import React from 'react'
import Button from '../Button/Button'

const Airtimedash = () => {
  return (
    
    <div className="flex justify-center items-center h-screen bg-mainBG ">
    <form className="bg-white rounded-md  ">
      <div className="flex gap-5 px-5  mb-[3rem] pt-10">
        <div className="flex flex-col w-[20rem] ">
          <label htmlFor="Utility className=">Netowork Provider</label>

          <select
            name="Utility"
            id=""
            className="border border-gray-400 py-1.5  w-full text-[1.5rem] font-semibold rounded-md"
          >
            <option value="Utility"></option>
            <option value="Utility">MTN</option>
            <option value="Utility">AIRTELL</option>
            <option value="Utility">9mobile</option>
            <option value="Utility">GLO</option>

          </select>
          
        </div>
        <div className="">
          <div className="flex flex-col w-[20rem]">
            <label htmlFor="Amount className=">Amount</label>

            <select
              name="Amount"
              id=""
              className="border border-gray-400 py-1.5  w-full text-[1.5rem] font-semibold rounded-md"
            >
              <option value="Amount"></option>
              <option value="Amount">500</option>
              <option value="Amount">750</option>
              <option value="Amount">1000</option>
              <option value="Amount">5000</option>
              <option value="Amount">10000</option>
            </select>
          </div>

        </div>
        
      </div>
      <div className=" flex justify-center gap-5 pb-10">
         <Button text='Proceed' bgclr='bg-[#4F4F4F] text-[#DBD9DD]  text-2xl px-[2.4rem] py-[.5rem] rounded-md '/>
         <Button text='Cancel' bgclr='bg-[#2B007A] text-white  text-2xl px-[2.4rem] py-[.5rem] rounded-md '/>
         </div>
    </form>
  </div>
    
  )
}

export default Airtimedash