import axios from "axios";
import { baseApi } from "../../../config";
import { getItem } from "../common/storage";

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
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(err);
  }
);

export default instance;
