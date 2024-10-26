import instance from "../../../services/middleware";
import toast from "react-hot-toast";

export const changePassword = (oldPassword, newPassword) => {
  return toast.promise(
    instance.post("/SharePanel/ChangePassword", {
      oldPassword,
      newPassword,
    }),
    {
      loading: "در حال پردازش",
      success: "اطلاعات با موفقیت ثبت شد",
      error: "رمز عبور فعلی اشتباه است",
    }
  );
};
