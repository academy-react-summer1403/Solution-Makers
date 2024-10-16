import MyNavbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import AppHelpers from "../../components/common/AppHelpers";
import { Toaster } from "react-hot-toast";

function AppLayout({ children }) {
  return (
    <>
      <Toaster position="top-center" />
      <MyNavbar />
      {children}
      <AppHelpers />
      <Footer />
    </>
  );
}

export default AppLayout;
