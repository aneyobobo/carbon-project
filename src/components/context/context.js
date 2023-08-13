

import { createContext, useContext, useState } from "react";






// const signupConext = createContext();
// const targetsetState = createContext();

// export function useSignupContext() {
//   return useContext(signupConext);
// }

// export function useTargetsetState() {
//   return useContext(targetsetState);
// }

// const GlobalContext = ({ children }) => {
//   const [surname, setSurname] = useState("");
//   const [othernames, setothernames] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeat_password, setrepeat_password] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   // const [loading, setLoading] = useState(false)
//   // const [disabled, setDisabled] = useState(false)

//   const getSurname = (e) => {
//     setSurname(e.target.value);
//   };

//   const getotherName = (e) => {
//     setothernames(e.target.value);
//   };

//   const getPhone = (e) => {
//     setPhone(e.target.value);
//   };

//   const getPassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const getrepeat_password = (e) => {
//     setrepeat_password(e.target.value);
//   };

//   const getEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const getDob = (e) => {
//     setDob(e.target.value);
//   };

//   const getGender = (e) => {
//     setGender(e.target.value);
//   };
//   return (
//     <signupConext.Provider
//       value={{
//         surname,
//         email,
//         othernames,
//         dob,
//         gender,
//         phone,
//         password,
//         repeat_password,
//       }}
//     >
//       <targetsetState.Provider
//         value={{
//           getSurname,
//           getotherName,
//           getPhone,
//           getPassword,
//           getrepeat_password,
//           getEmail,
//           getDob,
//           getGender,
//         }}
//       >
//         {children}
//       </targetsetState.Provider>
//     </signupConext.Provider>
//   );
// };

// export default GlobalContext;








const signupConext = createContext()
const targetsetState = createContext()


export function useSignupContext (){
  return useContext(signupConext)
}


export function useTargetsetState(){
  return useContext(targetsetState)
}


const GlobalContext = ({children}) =>{
const [surname, setSurname] = useState('')
const [email, setEmail] = useState('')
const [dob, setDob] = useState('')
const [gender,setGender] = useState('')
const [othernames, setOthernames] = useState('')
const [password, setPassword] = useState('')
const [repeat_password, setRepeat_password] = useState('')
const [phone, setPhone] = useState('')

const getSurname =(e)=>{
  setSurname(e.target.value)
}

const getEmail = (e) =>{
  setEmail(e.target.value)
}
const getDob = (e) =>{
setDob(e.target.value)
}

const getGender = (e) => {
setGender(e.target.value)
}
const getOthernames = (e) => {
  setOthernames(e.target.value)
}
const getPassword = (e) => {
setPassword(e.target.value)
}
const getRepeatPassword = (e) =>{
  setRepeat_password(e.target.value)
}
const getPhone = (e) => {
   setPhone(e.target.value)
}

return(
<signupConext.Provider value={{surname,email,dob,gender,othernames,password,repeat_password,phone}}>
<targetsetState.Provider value={{getSurname,getEmail,getDob,getGender,getOthernames,getPassword,getRepeatPassword,getPhone}}>
  {children}
</targetsetState.Provider>
</signupConext.Provider>
)
}
export default GlobalContext