import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

function ArticleCard({
  id,
  title,
  miniDescribe,
  currentView,
  updateDate,
  currentImageAddressTumb,
  addUserProfileImage,
}) {
  return (
    <Card className="p-4" isPressable onPress={() => console.log(id)}>
      <div className="flex justify-center w-full rounded-3xl overflow-hidden">
        <img
          src={
            currentImageAddressTumb ||
            "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
          }
          className="w-full h-[330px] md:h-[275px] lg:h-[280px]"
        />
      </div>
      <CardBody className="text-right px-0 mt-5">
        <h3 className="text-xl font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {title}
        </h3>
        <div className="flex flex-col text-justify justify-between sm:flex-row gap-2 sm:mt-4 text-ellipsis overflow-hidden">
          {miniDescribe}
        </div>
      </CardBody>
      <CardFooter className="flex-col items-center gap-4 justify-start sm:flex-row text-primary">
        <span className="flex items-center gap-1">
          <MdOutlineRemoveRedEye size={20} />
          {currentView}
        </span>
        <GoDotFill size={20} className="hidden sm:inline-block" />
        <span className="flex items-center gap-1">
          <IoCalendarOutline size={20} />
          {updateDate.slice(0, 10)}
        </span>
      </CardFooter>
    </Card>
  );
}

export default ArticleCard;
