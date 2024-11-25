import Login from "./index";
import LoginCodeVerification from "/src/pages/Login/LoginCodeVerifiction";
import SignUp from "../SignUp/SignUp";
import SignUpVerification from "../SignUp/SignUpVerification";
import SetPassword from "../SignUp/SetPassword";
import { useContext, useState } from "react";
import { AppContext } from "../../context/Provider";

const SignUpLoginIndex = () => {
  const { phoneNumber } = useContext(AppContext);

  const [stepLogin, setStepLogin] = useState(0);
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
    <>
      {stepLogin === 1 ? (
        <SignUp back={SetLogin} set={SetSignUpVerification} />
      ) : stepLogin === 2 ? (
        <SignUpVerification
          set={SetSetPassword}
          setStepLogin={setStepLogin}
          numRef={phoneNumber}
        />
      ) : stepLogin === 3 ? (
        <SetPassword set={SetLogin} numRef={phoneNumber} />
      ) : (
        <Login set={SetSignUp} />
      )}
    </>
  );
};

export default SignUpLoginIndex;
