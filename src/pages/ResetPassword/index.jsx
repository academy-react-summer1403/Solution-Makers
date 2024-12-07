import { useParams } from "react-router-dom";
import ResetPassword from "../../components/ResetPassword";

function ResetPasswordPage() {
  const { ConfigValue } = useParams();

  return <ResetPassword ConfigValue={ConfigValue} />;
}

export default ResetPasswordPage;
