import React from 'react'
import SideNav from "../../components/sideNav";
// import Main from "../../components/main"; 
import Header from '../header';

const Container = ({children}) => {
  return (
    <div className="flex">
      <div className="w-[20%]">
        <SideNav />
      </div>

      <div className="bg-mainBG w-[80%]">
        <Header/>
        {children}
      </div>
    </div>
  )
}

export default Container