import MyNavbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

function AppLayout({ children }) {
  return (
    <>
      <MyNavbar />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
