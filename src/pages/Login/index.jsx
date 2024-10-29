import { useNavigate } from "react-router-dom";
import "../../Check.css";
import { loginUser } from "../../core/api/app/auth";
import AppLayout from "../../layouts/AppLayout";
import { useEffect } from "react";
import { getItem } from "../../core/services/common/storage";

function Login() {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const phoneOrGmail = event.target.email.value;
    const password = event.target.password.value;

    // const obj = {
    //   phoneOrGmail,
    //   password,
    // };

    // console.log(obj);

    loginUser(phoneOrGmail, password).then(() => {
      setTimeout(() => {
        navigate("/my-panel/dashboard");
      }, 2000);
    });

    //   const res = await axios.post(
    //     "https://classapi.sepehracademy.ir/api/Sign/Login",
    //     obj
    //   );
    //   console.log(res.data);

    //   const Exist = res.data.success;
    //   const Error = res.data.message;
    //   const Number = res.data.phoneNumber;
    //   if (Exist === true) {
    //     console.log(Number);
    //     await axios.post(
    //       "https://api-academy.iran.liara.run/api/Sign/LoginTwoStep?VerifyCode=verify_code",
    //       Number
    //     );
    //   } else {
    //     alert(Error);
    //   }
    //   console.log("exist", { Exist });
  };

  const Close = () => {
    navigate("/");
  };

  useEffect(() => {
    getItem("token") && navigate("/my-panel/dashboard");
  }, []);

  return (
    <AppLayout>
      <div>
        <div className=" shadow-slate-500 shadow-lg mt-20 m-auto w-[420px] h-[490px] flex min-h-full flex-col lg:px-8 bg-[#fff] rounded-[25px] ">
          <div className="flex justify-between items-center flex-row">
            <h2 className=" text-[32px] mt-[32px] mr-[5px] text-right text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ورود به حساب
            </h2>
            <button
              onClick={Close}
              className=" mt-[30px] bg-[url('/src/assets/images/close.png')] bg-cover left-[30px] w-[48px] h-[48px] "
            ></button>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <div className="mt-[35px]">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="ایمیل "
                    className="pr-[15px] text-right h-[56px] rounded-[32px] block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-[16px]">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="رمز عبور"
                    className=" pr-[15px] text-right h-[56px] rounded-[32px] block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className=" mt-[6pX] flex items-center flex-row-reverse justify-between">
                  <div className="text-sm">
                    <a
                      href="/ForgetPassword"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      رمز عبور را فراموش کردم
                    </a>
                  </div>
                  <div className=" flex gap-[7px] items-center flex-row-reverse checkbox-wrapper-13">
                    <label
                      className="block cursor-pointer text-sm font-medium leading-6 text-gray-900"
                      htmlFor="c1-13"
                    >
                      من را به خاطر بسپار
                    </label>
                    <input id="c1-13" type="checkbox" />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex text-center items-center rounded-[32px] w-[208px] h-[56px] m-auto justify-center bg-[#2196F3] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  دریافت کد تایید
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              {" "}
              حساب کاربری ندارید؟{" "}
              <a
                href="/SignUp"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                ثبت نام
              </a>
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Login;
