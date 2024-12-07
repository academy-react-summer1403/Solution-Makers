import { useContext } from "react";
import { AppContext } from "../../context/Provider";
import { sendVerifyMessage } from "../../core/api/app/auth";
import toast from "react-hot-toast";

function SignUp({ back, set }) {
  const { setPhoneNumber, setisSignUpLoginModalOpen } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.phoneNumber.value);

    const obj = {
      phoneNumber: e.target.phoneNumber.value,
    };

    sendVerifyMessage(obj).then((res) => {
      if (res.data.success === true) {
        toast.success("کد شناسایی برای شما ارسال شد");
        set(true);
      }
    });
  };

  return (
    <div className=" shadow-slate-500 m-auto w-[420px] h-[380px] flex min-h-full flex-col px-8 bg-[#fff] rounded-[25px] dark:bg-dark-200">
      <div className="flex justify-between items-center flex-row">
        <h2 className="text-[32px] mt-[32px] mr-[5px] text-right text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ساخت حساب کاربری
        </h2>
        <button
          onClick={() => setisSignUpLoginModalOpen(false)}
          className="mt-[30px] bg-[url('/src/assets/images/close.png')] bg-cover left-[30px] w-[48px] h-[48px]"
        ></button>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <div className="mt-[35px]">
              <input
                name="phoneNumber"
                required
                placeholder="شماره موبایل"
                className="pr-[15px] text-right h-[56px] rounded-[32px] block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex text-center items-center rounded-[32px] w-[208px] h-[56px] m-auto justify-center bg-[#2196F3] mt-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              دریافت کد تایید
            </button>
          </div>
        </form>
        <p className="mt-5 text-center text-sm text-gray-500">
          {" "}
          حساب کاربری دارید؟{" "}
          <a
            onClick={back}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            وارد شوید
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
