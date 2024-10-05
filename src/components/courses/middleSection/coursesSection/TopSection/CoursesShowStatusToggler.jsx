import { Button } from "@nextui-org/react";
import { MdOutlineTableRows } from "react-icons/md";
import { BsGrid3X3 } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../../../../../context/Provider";

function CoursesShowStatusToggler() {
  const { rowsOfPage, setRowsOfPage, setReFetch } = useContext(AppContext);
  return (
    <div className="lg:w-full px-2 flex gap-3 items-center justify-center py-2 rounded-xl bg-white shadow-lg">
      <Button
        className={`${rowsOfPage == 9 ? "bg-[#dbdbdb]" : "bg-white"}`}
        isIconOnly
        variant="faded"
        onClick={() => {
          setRowsOfPage(9);
          setReFetch(true);
        }}
      >
        <BsGrid3X3 size={25} className="text-black" />
      </Button>
      <Button
        className={`${rowsOfPage == 5 ? "bg-[#dbdbdb]" : "bg-white"}`}
        isIconOnly
        variant="faded"
        onClick={() => {
          setRowsOfPage(5);
          setReFetch(true);
        }}
      >
        <MdOutlineTableRows size={32} className="text-black" />
      </Button>
    </div>
  );
}

export default CoursesShowStatusToggler;
