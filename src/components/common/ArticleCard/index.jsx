import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ArticleCard({
  id,
  title,
  miniDescribe,
  currentView,
  updateDate,
  currentImageAddressTumb,
  addUserProfileImage,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Card
      className="p-4 hover:scale-[1.03] dark:border-2 dark:border-[#707070]"
      data-aos="flip-left"
      isPressable
      onPress={() => navigate(id)}
    >
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
