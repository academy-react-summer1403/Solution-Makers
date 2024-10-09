// import { useState } from "react";
// import "./App.css";
// import "./tailwind.css";
// import Login from "./components/login/login";
import "../../Check.css";
import { useNavigate } from "react-router-dom";

function SetPassword() {
  // const [count, setCount] = useState(0)

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className=" shadow-slate-500 shadow-lg  mt-[205px] m-auto w-[420px] h-[528px] flex min-h-full  flex-col   lg:px-8 bg-[#fff] rounded-[25px] ">
        <div>
          <h2 className="  mt-[32px] mr-[17px] text-right text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ورود به حساب
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
          <form
            onSubmit={onSubmit}
            // action="#"
            // method="POST"
            className="space-y-6"
          >
            <div>
              <div className="mt-[35px]">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="ایمیل یا شماره موبایل"
                  className=" pr-[15px] text-right h-[56px] rounded-[32px] block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-[16px]">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="رمز عبور"
                  className=" pr-[15px] text-right h-[56px] rounded-[32px] block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-[16px]">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="تکرار رمز عبور"
                  className=" pr-[15px] text-right h-[56px] rounded-[32px] block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className=" mt-[8px] flex gap-[7px] items-center flex-row checkbox-wrapper-13">
                <input
                  id="c1-13"
                  type="checkbox"
                />
                <label
                  className="block cursor-pointer text-sm font-medium leading-6 text-gray-900"
                  htmlFor="c1-13"
                >
                  من را به خاطر بسپار
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex text-center items-center rounded-[32px] w-[208px] h-[56px] m-auto  justify-center  bg-[#2196F3] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SetPassword;
