import axios from "axios";

export const loginUser = (obj) => axios.post("/Sign/Login", obj);

export const sendVerifyMessage = (obj) => axios.post("/Sign/SendVerifyMessage", obj);

export const verifyMessage = (obj) => axios.post("/Sign/VerifyMessage", obj);

export const register = (user) => axios.post("/Sign/Register", user);

export const forgetPassword = (obj) => axios.post("/Sign/ForgetPassword", obj);

export const resetConfirmValue = (ConfigValue) => axios.get(`/Sign/Reset/${ConfigValue}`);

export const resetPassword = (obj) => axios.post("/Sign/Reset", obj);
