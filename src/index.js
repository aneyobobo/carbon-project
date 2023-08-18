import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Dashboard from "./pages/dashboard";
import Landing from "./pages/shared/landing/Landing";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Otpverify from "./components/Otpverify/Otpverify";
import Settingdash from "./components/Settingdash/Settingdash";
import Complaints from "./components/Complaints/Complaints";
import Utilitydash from "./components/Utility/Utilitydash";
import Airtimedash from "./components/Airtime/Airtimedash";
import Cable from "./components/Cable/Cable";
import Profile  from "./components/profile/Profile";
import GlobalContext from "./components/context/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "./components/fallback/Fallback";
import Getprofile from "./components/Getprofile/Getprofile";
import Transaction from "./components/Transactions/Transaction";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContext>

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Landing/> }/>
        <Route path='/signup' element={<Signup /> }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard/> }/>
        <Route path='/otp' element={<Otpverify /> }/>
        <Route path='/setting' element={<Settingdash/> }/>
        <Route path='/complaints' element={<Complaints/>  }/>
        <Route path='/utility' element={<Utilitydash/>  }/>
        <Route path='/airtime' element={<Airtimedash/> }/>
        <Route path='/cable' element={<Cable /> }/>
        <Route path='/transaction'element={<Transaction/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/updateprofile' element={<Getprofile/>}/>
        <Route path="*" element={<Fallback/>}/>
        
      </Routes>
      
      </BrowserRouter>
      {/*   */}
      
      
      
      
      {/* <Settingdash/> */}
      {/* <Complaints/>  */}
      {/* <Utilitydash/> */}
      {/* <Airtimedash/> */}
      {/* <Cable />   */}
      {/* <Profile /> */}
    </GlobalContext>
  </React.StrictMode>
);

// reportWebVitals();
