import {
  Button,
  Input,
} from "@nextui-org/react";
import {
  AiOutlineCopyright,
  AiFillInstagram,
} from "react-icons/ai";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import SocialsIcon from "./SocialsIcon";

function Footer() {
  return (
    <div className="bg-[#252641] dark:bg-dark-200 text-white mt-28">
      <div className="container flex flex-col gap-10 p-10">
        <div className="flex justify-center gap-4">
          <img src="/src/assets/images/footer/Group 33.png" />
          <h3 className="text-xl">
            Solution Makers
          </h3>
        </div>
        <div className="text-center">
          <p>
            هدف ما سهولت دسترسی و دریافت
            خدمات از همه ی نقاط کشور با
            کمترین تعرفه و بدون نیاز
            مراجعه حضوری در کل فرایند
            ثبت
          </p>
        </div>
        <p className="text-center">
          برای دریافت اخبار از طریق
          ایمیل ثبت نام کنید
        </p>
        <div className="flex-col sm:flex-row flex justify-center items-center gap-4">
          <Input
            style={{ direction: "ltr" }}
            radius="full"
            type="email"
            placeholder="Example@gmail.com"
            // defaultValue=""
            className="max-w-[480px]"
            classNames={{
              inputWrapper:
                "py-7 dark:border",
              input:
                "text-sm sm:text-xl",
              clearButton:
                "text-red-500",
            }}
            startContent={
              <Button
                radius="full"
                className="hidden sm:inline-block bg-primary text-white"
              >
                خبرم کن
              </Button>
            }
          />
          <Button
            radius="full"
            className="sm:hidden bg-primary text-white w-1/3 text-md"
          >
            خبرم کن
          </Button>
        </div>
        <div className="flex-col sm:flex-row flex justify-center items-center gap-5 sm:gap-2">
          <p className="px-11">
            دوره های آموزشی{" "}
          </p>
          <p className="sm:border-r-1 px-11">
            درباره ما
          </p>
          <p className="sm:border-t-0 sm:border-r-1 px-11">
            قوانین و مقررات
          </p>
        </div>
        <div className="p-2 text-xs md:text-[1rem] flex-col md:flex-row flex justify-between bg-[#00000033] md:p-5 rounded-2xl gap-4">
          <p className="flex justify-center items-center gap-3">
            <AiOutlineCopyright
              size={30}
            />
            تمام حقوق مادی و معنوی این
            مجموعه متعلق به HexaSquad.ir
            میباشد
          </p>
          <div className="flex-wrap sm:flex-nowrap sm:flex-row flex gap-4 items-center justify-center">
            <SocialsIcon
              icon={<FaLinkedinIn />}
            />
            <SocialsIcon
              icon={<IoLogoWhatsapp />}
            />
            <SocialsIcon
              icon={<FaFacebookF />}
            />
            <SocialsIcon
              icon={<FaTwitter />}
            />
            <SocialsIcon
              icon={<AiFillInstagram />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
