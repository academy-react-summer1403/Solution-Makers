import { useContext } from "react";
import { AppContext } from "../../../../context/Provider";
import { Button } from "@nextui-org/react";
import Span from "./Span";
import { useNavigate } from "react-router-dom";
import { TbArrowBigDownFilled } from "react-icons/tb";

function UserDetails() {
  const { userInfos } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="relative grid justify-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 text-md md:text-lg gap-16 p-10 lg:ps-24 border rounded-xl mx-10 mt-8 overflow-hidden min-h-[150px] dark:bg-dark-200">
      <>
        {Object.keys(userInfos).length > 0 && (
          <>
            {userInfos.profileCompletionPercentage < 30 && (
              <span className="text-red-500">
                لطفا برای تکمیل اطلاعات خود روی دکمه ویرایش کلیک کنید
              </span>
            )}
            {userInfos.fName && userInfos.lName && (
              <Span value={`${userInfos.fName} ${userInfos.lName}`}>
                نام و نام خانوادگی
              </Span>
            )}
            {userInfos.birthDay && (
              <Span value={userInfos.birthDay.toString().slice(0, 10)}>
                تاریخ تولد
              </Span>
            )}
            {userInfos.phoneNumber && (
              <Span value={userInfos.phoneNumber}>شماره همراه</Span>
            )}
            {userInfos.nationalCode && (
              <Span value={userInfos.nationalCode}>شماره ملی</Span>
            )}
            {userInfos.email && (
              <Span value={userInfos.email}>ایمیل کاربر</Span>
            )}
          </>
        )}
        <div className="flex justify-center sm:hidden">
          <Button
            className="bg-primary text-white text-lg w-full overflow-visible dark:bg-dark-100"
            onClick={() => navigate("/my-panel/edit-profile")}
          >
            {userInfos.profileCompletionPercentage < 30 && (
              <span className="text-red-500 absolute -top-6 animate-bounce">
                <TbArrowBigDownFilled size={25} />
              </span>
            )}
            ویرایش
          </Button>
        </div>
        <Button
          className="hidden sm:inline-flex absolute bottom-0 left-0 px-10 py-6 text-md bg-primary text-white dark:bg-dark-100 overflow-visible"
          style={{ borderRadius: "0px 12px 0px 0px" }}
          onClick={() => navigate("/my-panel/edit-profile")}
        >
          {userInfos.profileCompletionPercentage < 30 && (
            <span className="text-red-500 absolute -top-6 animate-bounce">
              <TbArrowBigDownFilled size={25} />
            </span>
          )}
          ویرایش
        </Button>
      </>
    </div>
  );
}

export default UserDetails;
