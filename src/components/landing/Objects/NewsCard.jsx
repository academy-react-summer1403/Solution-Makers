import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const NewsCard = ({
  id,
  title,
  miniDescribe,
  currentView,
  updateDate,
  currentImageAddressTumb,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/articles/${id}`)}
      className="rounded-[25px] overflow-hidden bg-none h-[161px] flex hover:scale-[1.03] cursor-pointer duration-200 px-2 lg:px-10"
    >
      <div className="h-[161px] rounded-[25px] overflow-hidden w-full md:w-[40%]">
        <img
          src={
            currentImageAddressTumb || "/src/components/Landing/Objects/photo.png"
          }
          className="w-full h-full"
        />
      </div>
      <div className="hidden w-[60%] md:flex flex-col justify-between mr-[20px]">
        <h1 className="text-[20px] mt-[6px]">{title}</h1>
        <p className="text-[14px] break-words">{miniDescribe || ""}</p>
        <div className="flex flex-row items-center gap-4 justify-start sm:flex-row text-primary">
          <span className="flex items-center gap-1">
            <MdOutlineRemoveRedEye size={20} />
            {currentView || ""}
          </span>
          <GoDotFill size={20} className="hidden sm:inline-block" />
          <span className="flex items-center gap-1">
            <IoCalendarOutline size={20} />
            {updateDate.slice(0, 10) || ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
