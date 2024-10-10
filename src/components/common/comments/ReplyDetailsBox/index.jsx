import { Avatar } from "@nextui-org/react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

function ReplyDetailsBox({
  insertDate,
  describe,
  likeCount,
  autor,
  pictureAddress,
}) {
  return (
    <div className="text-sm xs:text-medium flex flex-col gap-3 mt-4 md:ms-12 py-4 ps-5 border-[#CFD8DC] border-r-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col xs:flex-row items-center gap-3">
          <span>
            <Avatar
              radius="full"
              size="md"
              src={pictureAddress || "/src/assets/images/notFound/images.png"}
            />
          </span>
          <span>{autor}</span>
        </div>
        <p className="hidden xs:block text-[#607D8B]">
          {insertDate.slice(0, 10)}
        </p>
      </div>
      <p className="text-ellipsis whitespace-nowrap overflow-hidden">
        {describe}
      </p>
      <div className="flex flex-col xs:flex-row gap-5">
        <span className="flex items-center gap-1 text-red-500">
          {likeCount} <FaRegHeart />
        </span>
        <span className="flex items-center gap-1">
          پاسخ
          <BiMessageRounded />
        </span>
      </div>
    </div>
  );
}

export default ReplyDetailsBox;
