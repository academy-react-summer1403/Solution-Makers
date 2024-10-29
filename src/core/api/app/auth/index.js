import axios from "axios";
import toast from "react-hot-toast";
import { setItem } from "../../../services/common/storage";

export const loginUser = (phoneOrGmail, password) =>
  axios
    .post(`/Sign/Login`, {
      phoneOrGmail,
      password,
      rememberMe: true,
    })
    .then((res) => {
      if (res.data.token) {
        setItem("token", res.data.token);
        setItem("userId", res.data.id);
        toast.success("با موفقیت وارد شدید");
      } else {
        toast.error("همچین کاربری وجود ندارد");
        return;
      }
    })
    .catch((error) => toast.error("خطایی رخ داد"));
