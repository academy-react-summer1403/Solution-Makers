import { getItem } from "../core/services/common/storage";

export const isLogin = () => {
  if (getItem("token")) {
    return true;
  } else {
    return false;
  }
};
