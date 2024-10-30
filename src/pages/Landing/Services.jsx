// import React from "react";
import ServicesCard from "./Objects/ServicesCard";
import SectionsTitle from "./Objects/SectionsTitle";

const Services = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-[20px] items-center ">
        <SectionsTitle name="خدمات ما" />
        <div className=" w-full flex flex-row  justify-between items-center ">
          <ServicesCard
            cardWidth="405px"
            cardHeight="280px"
            img="/src/pages/Landing/Objects/ServiceSimple.png"
            serviceTitle="سادگی خدمات"
            serviceDescription="سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
          />
          <ServicesCard
            img="/src/pages/Landing/Objects/ServiceS.png"
            serviceTitle="فرصت های شغلی"
            serviceDescription="
                سهولت دسترسی و دریافت
                خدمات از همه ی نقاط کشور
                با کمترین تعرفه و بدون
                نیاز مراجعه حضوری در کل
                فرایند ثبت"
          />
          <ServicesCard
            img="/src/pages/Landing/Objects/ServiceMadrak.png"
            serviceTitle="مدرک معتبر"
            serviceDescription="سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
          />
        </div>
      </div>
    </>
  );
};

export default Services;
