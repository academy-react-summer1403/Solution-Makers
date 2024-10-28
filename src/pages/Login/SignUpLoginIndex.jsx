// import React from 'react'
import Login from "/src/pages/Login/index";
import LoginCodeVerification from "/src/pages/Login/LoginCodeVerifiction";
import SignUp from "../SignUp/SignUp";
import SignUpVerification from "../SignUp/SignUpVerification";
import SetPassword from "../SignUp/SetPassword";
import {
  useEffect,
  useState,
} from "react";
// import { useRef } from "react";

const SignUpLoginIndex = () => {
  // const login = useRef(0)
  // const logVer = useRef(1)
  // const signUp = useRef(2)
  // const signVer = useRef(3)
  // const setPas = useRef(4)

  return (
    <div>
      {/* <Login /> */}
      <LoginCodeVerification />
      <SignUp />
      <SignUpVerification />
      <SetPassword />
    </div>
  );
};

export default SignUpLoginIndex;
