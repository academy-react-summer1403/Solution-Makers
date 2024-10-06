import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

function ArticleCard({ id, title, miniDescribe, currentView, insertDate , currentImageAddressTumb }) {
  return (
    <div className="flex flex-col gap-4 lg:h-[447px] rounded-3xl shadow-lg p-4 cursor-pointer">
      <div className="rounded-3xl overflow-hidden">
        <img src={currentImageAddressTumb} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {title}
        </h3>
        <p className="text-justify text-ellipsis overflow-hidden">
          {miniDescribe}
        </p>
      </div>
      <div className="flex gap-4 text-primary">
        <span className="flex items-center gap-1">
          <MdOutlineRemoveRedEye /> {currentView} بازدید
        </span>
        <span className="flex items-center">
          <GoDotFill />
        </span>
        <span className="flex items-center gap-1">
          <IoCalendarOutline /> {insertDate}
        </span>
      </div>
    </div>
  );
}

export default ArticleCard;
