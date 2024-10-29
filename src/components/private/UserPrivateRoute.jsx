import { Navigate } from "react-router-dom";
import { isLogin } from "../../utils/auth";

function UserPrivateRoute({ children }) {
  if (isLogin()) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default UserPrivateRoute;
