import { Button } from "@nextui-org/react";
import { MdOutlineTableRows } from "react-icons/md";
import { BsGrid3X3 } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../../../../context/Provider";

function CoursesShowStatusToggler() {
  const { setCoursesShowStatus } = useContext(AppContext);
  
  return (
    <div className="flex gap-3 items-center py-2 px-3 rounded-xl bg-white">
      <Button
        isIconOnly
        variant="faded"
        onClick={() => setCoursesShowStatus("column")}
      >
        <BsGrid3X3 size={25} className="text-black" />
      </Button>
      <Button
        isIconOnly
        variant="faded"
        onClick={() => setCoursesShowStatus("row")}
      >
        <MdOutlineTableRows size={32} className="text-black" />
      </Button>
    </div>
  );
}

export default CoursesShowStatusToggler;
