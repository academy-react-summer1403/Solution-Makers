import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { resetConfirmValue, resetPassword } from "../../core/api/app/auth";

function ResetPassword({ ConfigValue }) {
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [resetValue, setResetValue] = useState("");

  useEffect(() => {
    resetConfirmValue(ConfigValue).then((res) => {
      if (res.data.success) {
        setIsResetPasswordModalOpen(true);
        setUserId(res.data.id);
        setResetValue(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    resetPassword({
      userId,
      resetValue,
      newPassword,
    }).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        setNewPassword("");
        setIsResetPasswordModalOpen(false);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  return (
    <>
      <Toaster />
      <Modal
        isOpen={isResetPasswordModalOpen}
        classNames={{ closeButton: " hidden" }}
      >
        <ModalContent>
          <ModalBody>
            <div className="shadow-slate-500 m-auto w-[420px] flex min-h-full flex-col px-8 pb-5 bg-[#fff] rounded-[25px] dark:bg-dark-200">
              <div className="flex justify-between items-center flex-row">
                <h2 className="text-[32px] mt-[32px] mr-[5px] text-right text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  رمز عبور جدید
                </h2>
                <button
                  onClick={() => setIsResetPasswordModalOpen(false)}
                  className="mt-[30px] bg-[url('/src/assets/images/close.png')] bg-cover left-[30px] w-[48px] h-[48px]"
                ></button>
              </div>
              <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <div className="mt-[35px]">
                      <input
                        value={newPassword}
                        required
                        placeholder="رمز عبور جدید خود را وارد کنید"
                        className="pr-[15px] text-right h-[56px] rounded-[32px] block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex text-center items-center rounded-[32px] w-[208px] h-[56px] m-auto mt-10 justify-center bg-[#2196F3] px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      ثبت رمز عبور جدید
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="w-screen h-screen flex justify-center items-center">
        <Link to="/" className="bg-primary text-white text-2xl rounded-2xl p-3">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
}

export default ResetPassword;
