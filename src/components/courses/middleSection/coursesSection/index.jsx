import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import CoursesList from "./CoursesList";
import TopSection from "./TopSection";
import FilterSection from "../FilterSection";
import { IoMdClose } from "react-icons/io";

function CoursesSection() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <TopSection onOpen={onOpen} />
      <CoursesList />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ base: "dark:bg-dark-200", closeButton: "text-2xl relative top-2 ms-3" }}
        scrollBehavior="inside"
        closeButton={<IoMdClose size={40}/>}
      >
        <ModalContent>
          {(onclose) => (
            <ModalBody>
              <FilterSection onclose={onclose} />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CoursesSection;
