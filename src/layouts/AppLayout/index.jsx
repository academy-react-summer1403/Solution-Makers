import MyNavbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import AppHelpers from "../../components/common/AppHelpers";


function AppLayout({ children }) {
  return (
    <>
      <MyNavbar />
      {children}
      <AppHelpers />
      <Footer />
    </>
  );
}

export default AppLayout;
