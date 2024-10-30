import { Button } from "@nextui-org/react";
import { MdOutlineTableRows } from "react-icons/md";
import { BsGrid3X3 } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../../../../../context/Provider";

function CoursesShowStatusToggler() {
  const { rowsOfPage, setRowsOfPage, setReFetch } = useContext(AppContext);
  return (
    <div className="lg:w-full px-2 flex gap-3 items-center justify-center py-2 rounded-xl bg-white shadow-lg dark:bg-dark-100">
      <Button
        className={`${
          rowsOfPage == 9 ? "bg-[#dbdbdb]" : "bg-white"
        } text-xl xs:text-2xl`}
        isIconOnly
        variant="faded"
        onClick={() => {
          setRowsOfPage(9);
          setReFetch(true);
        }}
      >
        <BsGrid3X3 className="text-black" />
      </Button>
      <Button
        className={`${
          rowsOfPage == 5 ? "bg-[#dbdbdb]" : "bg-white"
        } text-xl xs:text-3xl`}
        isIconOnly
        variant="faded"
        onClick={() => {
          setRowsOfPage(5);
          setReFetch(true);
        }}
      >
        <MdOutlineTableRows className="text-black" />
      </Button>
    </div>
  );
}

export default CoursesShowStatusToggler;
