import {
  useContext,
  useRef,
  useState,
} from "react";
import "../../app/App.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Provider";

function ResetPassword() {
  const navigate = useNavigate();
  const {configValue} = useContext(AppContext)

  // const [resendShow, setResendShow] =
  //   useState(false);

  // setTimeout(() => {
  //   setResendShow(true);
  // }, 2000);

  const Close = () => {
    navigate("/");
  };
  const [otp, setOtp] = useState(
    Array(5).fill("")
  ); // Array with 6 empty strings
  const inputRefs = useRef([]); // Array of refs for each input field

  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (
      e.key === "Delete" ||
      e.key === "Backspace"
    ) {
      const index =
        inputRefs.current.indexOf(
          e.target
        );
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(
            0,
            index - 1
          ),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[
          index - 1
        ].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index =
      inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[
          index + 1
        ].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text =
      e.clipboardData.getData("text");
    if (
      !new RegExp(
        `^[0-9]{${otp.length}}$`
      ).test(text)
    ) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // const VeriCode =
    //   otp[0] +
    //   otp[1] +
    //   otp[2] +
    //   otp[3] +
    //   otp[4];

    // console.log(VeriCode);
    console.log(configValue);
  };

  return (
    <>
      <div className=" shadow-slate-500 shadow-lg font-[yek]  font-medium mt-[205px] m-auto w-full sm:w-[420px] h-[483px] flex min-h-full flex-col lg:px-8 bg-[#fff] rounded-[25px] ">
        <div className="flex justify-between items-center flex-row">
          <h2 className=" text-[32px] mt-[32px] mr-[3px] text-right text-2xl font-bold leading-9 tracking-tight text-gray-900">
            کد تاییدیه
          </h2>
          <button
            onClick={Close}
            className=" mt-[30px] bg-[url('/src/assets/images/close.png')] bg-cover  left-[30px] w-[48px] h-[48px] "
          ></button>
        </div>
        <div className=" items-center w-[356px] mx-auto sm:w-full sm:max-w-[356px]  ">
          <div className=" w-[356px] mt-10 text-right text-[14px] text-gray-500">
            کد به شماره 989118045177+
            ارسال شد، در صورت اشتباه
            بودن شماره آنرا{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-[#2196F3] hover:text-indigo-500"
            >
              تغییر دهید
            </a>
          </div>

          <form
            // action="#"
            // method="POST"
            onSubmit={onSubmit}
          >
            <div className="flex flex-row-reverse flex-nowrap justify-between mt-[35px] w-[356px]  ">
              {otp.map(
                (digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={
                      handleInput
                    }
                    onKeyDown={
                      handleKeyDown
                    }
                    onFocus={
                      handleFocus
                    }
                    onPaste={
                      handlePaste
                    }
                    ref={(el) =>
                      (inputRefs.current[
                        index
                      ] = el)
                    }
                    className="font-bold p-[15px] text-center text-2xl h-[62px] rounded-[24px] block w-[62px]  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6;
                      outline-none shadow-xs "
                    // className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
                  />
                )
              )}
            </div>

            <div className="text-[24px]  text-center text-[#2196F3] pt-[28px] pb-[35px]  ">
              1:34
            </div>
            <button
              type="submit"
              className="flex text-center items-center rounded-[32px] w-[208px] h-[56px] m-auto  justify-center  bg-[#2196F3] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود به حساب
            </button>
          </form>
          <p className="mt-[15px] text-center text-sm text-gray-500">
            {" "}
            کد ارسال نشد؟{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-[#2196F3] hover:text-indigo-500"
            >
              ارسال دوباره
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
