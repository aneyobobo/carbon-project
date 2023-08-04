import { createContext, useContext, useState } from "react";

const signupContext = createContext();
const targetsetState = createContext();

export function useSignupContext() {
  useContext(signupContext);
}

export function useTargetsetState() {
  useContext(targetsetState);
}

const GlobalContext = ({ children }) => {
  const [surname, setSurname] = useState("");
  const [othernames, setothernames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setrepeat_password] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const getSurname = (e) => {
    setSurname(e.target.value);
  };

  const getotherName = (e) => {
    setothernames(e.target.value);
  };

  const getPhone = (e) => {
    setPhone(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const getrepeat_password = (e) => {
    setrepeat_password(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getDob = (e) => {
    setDob(e.target.value);
  };

  const getGender = (e) => {
    setGender(e.target.value);
  };

  const getLoading = (e) => {
    setLoading(e.target.value);
  };

  const getdisabled = (e) => {
    setDisabled(e.target.value);
  };

  return (
    <signupContext.Provider
      value={{
        surname,
        othernames,
        email,
        phone,
        password,
        repeat_password,
        dob,
        gender,
        loading,
        disabled,
      }}
    >
      <targetsetState.Provider
        value={{
          getSurname,
          getotherName,
          getPhone,
          getPassword,
          getrepeat_password,
          getEmai,
          getDob,
          getGender,
          getLoading,
          getdisabled,
        }}
      >
        {children}
      </targetsetState.Provider>
    </signupContext.Provider>
  );
};

export default GlobalContext;
