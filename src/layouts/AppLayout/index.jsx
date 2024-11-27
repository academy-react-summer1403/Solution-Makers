import MyNavbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import AppHelpers from "../../components/common/AppHelpers";
import { Toaster } from "react-hot-toast";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import SignUpLoginIndex from "../../components/login/SignUpLoginIndex";
import { useContext } from "react";
import { AppContext } from "../../context/Provider";

function AppLayout({ children }) {
  const { isSignUpLoginModalOpen, setisSignUpLoginModalOpen } = useContext(AppContext);

  return (
    <>
      <Toaster position="top-center" />
      <MyNavbar />
      <Modal
        isOpen={isSignUpLoginModalOpen}
        onOpenChange={() => setisSignUpLoginModalOpen(false)}
        classNames={{ base: "dark:bg-dark-200", closeButton: " hidden" }}
      >
        <ModalContent>
          <ModalBody>
            <SignUpLoginIndex />
          </ModalBody>
        </ModalContent>
      </Modal>
      {children}
      <AppHelpers />
      <Footer />
    </>
  );
}

export default AppLayout;
