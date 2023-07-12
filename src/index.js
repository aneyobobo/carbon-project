import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import App from './App';
import Dashboard from './pages/dashboard';
import Landing from './pages/shared/landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Otpverify from './components/Otpverify/Otpverify';
import Settingdash from './components/Settingdash/Settingdash';
import Complaints from './components/Complaints/Complaints';
import Utilitydash from './components/Utility/Utilitydash';
import Airtimedash from './components/Airtime/Airtimedash';
import Cable from './components/Cable/Cable';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <Landing/>   */}
  {/* <Dashboard/> */}
   {/* <Login/> */}
  {/* <Signup/>  */}
  <Otpverify/>
  {/* <Settingdash/> */}
  {/* <Complaints/>  */}
  {/* <Utilitydash/> */}
  {/* <Airtimedash/> */}
  {/* <Cable />   */}


  </React.StrictMode>
);

reportWebVitals();
