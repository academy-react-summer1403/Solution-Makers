// import React from 'react'
import Login from "/src/pages/Login/index";
import LoginCodeVerification from "/src/pages/Login/LoginCodeVerifiction";
import SignUp from "../SignUp/SignUp";
import SignUpVerification from "../SignUp/SignUpVerification";
import SetPassword from "../SignUp/SetPassword";
import {
  useContext,
  useState,
} from "react";
import { AppContext } from "../../context/Provider";
// import { useRef } from "react";

const SignUpLoginIndex = () => {
  const { phoneNumber } =
    useContext(AppContext);

  const [stepLogin, setStepLogin] =
    useState(0);
  const SetLogin = () => {
    setStepLogin(0);
  };
  const SetSignUp = () => {
    setStepLogin(1);
  };
  const SetSignUpVerification = () => {
    setStepLogin(2);
  };
  const SetSetPassword = () => {
    setStepLogin(3);
  };
  console.log(phoneNumber);

  return (
    <div className="fixed w-full h-full backdrop:blur-sm">
      <div>
        {stepLogin === 1 ? (
          <SignUp
            back={SetLogin}
            set={SetSignUpVerification}
          />
        ) : stepLogin === 2 ? (
          <SignUpVerification
            set={SetSetPassword}
            numRef={phoneNumber}
          />
        ) : stepLogin === 3 ? (
          <SetPassword
            set={SetLogin}
            numRef={phoneNumber}
          />
        ) : (
          <Login set={SetSignUp} />
        )}

        {/* 
      <SignUp />
      
       */}
      </div>
    </div>
  );
};

export default SignUpLoginIndex;
