/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import { cn } from "@nextui-org/react";

const NewsCard = ({
  id,
  title,
  miniDescribe,
  currentView,
  updateDate,
  currentImageAddressTumb,
  addUserProfileImage,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <div className={cn('w-10', state ? 'block' : hidden)}></div> */}
      <div
        onClick={() =>
          navigate("/articles/" + id)
        }
        className="   rounded-[25px] overflow-hidden  bg-none  w-[624px] h-[161px] flex flex-row hover:scale-[1.03] cursor-pointer duration-200 "
      >
        <div className="  w-[224px] h-[161px] rounded-[25px] overflow-hidden ">
          <img
            src={
              currentImageAddressTumb ||
              "/src/pages/Landing/Objects/photo.png"
            }
            className=" w-full h-full "
          />
        </div>
        <div className=" flex flex-col justify-between w-[376px] mr-[20px] ">
          <h1 className=" text-[20px] mt-[6px] ">
            {title}
          </h1>
          <p className=" text-[14px] ">
            {miniDescribe || ""}
          </p>
          <div className="flex flex-row items-center gap-4 justify-start sm:flex-row text-primary">
            <span className="flex items-center gap-1">
              <MdOutlineRemoveRedEye
                size={20}
              />
              {currentView || ""}
            </span>
            <GoDotFill
              size={20}
              className="hidden sm:inline-block"
            />
            <span className="flex items-center gap-1">
              <IoCalendarOutline
                size={20}
              />
              {updateDate || ""}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;

// import React from "react";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { IoCalendarOutline } from "react-icons/io5";
// import { GoDotFill } from "react-icons/go";
// import {
//   Card,
//   CardBody,
//   CardFooter,
// } from "@nextui-org/react";
// import { useNavigation } from "react-router-dom";

// const NewsCard = ({
//   id,
//   title,
//   miniDescribe,
//   currentView,
//   updateDate,
//   currentImageAddressTumb,
//   addUserProfileImage,
// }) => {
//   const navigate = useNavigation();
//   return (
//     <Card
//       onPress={() => navigate(id)}
//       className="   w-[624px] h-[161px] flex flex-row  "
//     >
//       <div className="  w-[224px] h-[161px] ">
//         <img
//           src={
//             currentImageAddressTumb ||
//             "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
//           }
//           className=" w-full h-full "
//         />
//       </div>
//       <div className=" flex flex-col justify-between w-[376px] mr-[5px] ">
//         <h1 className=" text-[20px] mt-[6px] ">
//           {" "}
//           {title}{" "}
//         </h1>
//         <p className=" text-[14px] ">
//           {miniDescribe}
//         </p>
//         <CardFooter className="flex-col items-center gap-4 justify-start sm:flex-row text-primary">
//           <span className="flex items-center gap-1">
//             <MdOutlineRemoveRedEye
//               size={20}
//             />
//             {currentView}
//           </span>
//           <GoDotFill
//             size={20}
//             className="hidden sm:inline-block"
//           />
//           <span className="flex items-center gap-1">
//             <IoCalendarOutline
//               size={20}
//             />
//             {updateDate.slice(0, 10)}
//           </span>
//         </CardFooter>
//       </div>
//     </Card>
//   );
// };

// export default NewsCard;
