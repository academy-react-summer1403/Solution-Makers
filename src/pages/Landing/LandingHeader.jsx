// import React from "react";
// import CategoriesBG from "../../assets/images/categoriesBG";
import LandHeadObj from "./Objects/LandHeadObj";
// import "/src/pages/Landing/LandingHeader.css";

const LandingHeader = () => {
  return (
    <div className="relative pt-[100px] w-full h-[900px] m-auto text-center bg-[url(/src/pages/Landing/header-bg.png)] bg-[length:100%_90%] bg-no-repeat  dark:invert-[1] dark:text-black flex  flex-row flex-nowrap justify-center ">
      <div className=" flex flex-col text-center gap-[60px] ">
        <div>
          <p className=" text-[24px] ">
            پلتفرم آموزش طراحی وب
          </p>
          <h1 className=" text-[80px] ">
            مرجع آموزش برنامه نویسی
          </h1>
          <p className=" text-[24px] ">
            مرجع اموزش زنده و تعاملی
            دسترسی به بیش از هفت هزار
            ویدیوی اموزشی به زبان فارسی
            .
          </p>
        </div>
        <div>
          <input
            type="search"
            placeholder="چی میخوای یاد بگیری ؟"
            className=" w-[724px] h-[56px] rounded-[20px] pr-4 "
          />
        </div>
        <div className=" flex flex-row flex-nowrap justify-between ">
          <LandHeadObj
            img="/src/pages/Landing/Objects/Teachers.png"
            title="مدرس مجرب"
          />
          <LandHeadObj
            img="/src/pages/Landing/Objects/LearningTime.png"
            title="دقیقه آموزش"
          />
          <LandHeadObj
            img="/src/pages/Landing/Objects/StudentNum.png"
            title="نفر دانشجو"
          />
        </div>
      </div>
      <div></div>
      {/* <CategoriesBG /> */}
    </div>
  );
};

export default LandingHeader;
