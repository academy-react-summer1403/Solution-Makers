import axios from "axios";
import { baseApi } from "../../../config";
import { getItem } from "../common/storage";
import toast from "react-hot-toast";

axios.defaults.baseURL = baseApi;

const instance = axios.create({
  baseURL: baseApi,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getItem("token")}`;
    return config;
  },
  (error) => {
    console.log("error =>", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("error =>", error);
    switch (error.status) {
      case 422:
        toast.error("اطلاعات نامعتبر می باشد");
        break;
      case 400:
        toast.error("خطایی رخ داد");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default instance;
