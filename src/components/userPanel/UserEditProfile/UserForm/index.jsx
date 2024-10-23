import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/Provider";
import { Form, Formik } from "formik";
import { Button, DateInput } from "@nextui-org/react";
import UserFormInput from "./UserFormInput";
import { parseDate } from "@internationalized/date";
import * as Yup from "yup";
import instance from "../../../../core/services/middleware";
import toast from "react-hot-toast";

function UserForm() {
  const { userInfos, setReFetch } = useContext(AppContext);
  const [dateInputValue, setDateInputValue] = useState(parseDate("2024-04-04"));

  useEffect(() => {
    if (Object.keys(userInfos).length > 0) {
      if (userInfos.birthDay) {
        setDateInputValue(parseDate(userInfos.birthDay.slice(0, 10)));
      }
    }
  }, [Object.keys(userInfos).length]);

  const UserFormSchema = Yup.object({
    FName: Yup.string().min(2, "حداقل 2 کاراکتر").required("این فیلد الزامیست"),
    LName: Yup.string().min(2, "حداقل 2 کاراکتر").required("این فیلد الزامیست"),
    UserAbout: Yup.string()
      .min(5, "حداقل 5 کاراکتر")
      .required("این فیلد الزامیست"),
    HomeAdderess: Yup.string()
      .min(5, "حداقل 5 کاراکتر")
      .required("این فیلد الزامیست"),
    NationalCode: Yup.string()
      .length(10, "10 کاراکتر")
      .required("این فیلد الزامیست"),
    PhoneNumber: Yup.string()
      .length(11, "11 کاراکتر")
      .required("این فیلد الزامیست"),
  });

  return (
    <>
      {Object.keys(userInfos).length && (
        <Formik
          initialValues={{
            FName: userInfos.fName,
            LName: userInfos.lName,
            UserAbout: userInfos.userAbout,
            LinkdinProfile: userInfos.linkdinProfile,
            TelegramLink: userInfos.telegramLink,
            ReceiveMessageEvent: userInfos.receiveMessageEvent,
            HomeAdderess: userInfos.homeAdderess,
            NationalCode: userInfos.nationalCode,
            Gender: userInfos.gender,
            BirthDay: userInfos.birthDay,
            PhoneNumber: userInfos.phoneNumber,
            Email: userInfos.email,
          }}
          validationSchema={UserFormSchema}
          onSubmit={(values) => {
            console.log(values);
            const formData = new FormData();
            formData.append("FName", values.FName);
            formData.append("LName", values.LName);
            formData.append("BirthDay", `${dateInputValue.year}-${dateInputValue.month}-${dateInputValue.day}`);
            formData.append("PhoneNumber", values.PhoneNumber);
            formData.append("NationalCode", values.NationalCode);
            formData.append("HomeAdderess", values.HomeAdderess);
            formData.append("UserAbout", values.UserAbout);
            // formData.append("Email", values.Email);
            values.TelegramLink &&
              formData.append("TelegramLink", values.TelegramLink);
            values.LinkdinProfile &&
              formData.append("LinkdinProfile", values.LinkdinProfile);
            toast
              .promise(
                instance.put("/SharePanel/UpdateProfileInfo", formData),
                {
                  loading: "در حال پردازش اطلاعات",
                  success: "اطلاعات با موفقیت ثبت شد",
                  error: "خطایی رخ داد",
                }
              )
              .then(() => setReFetch(true));
          }}
        >
          <Form>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <UserFormInput label="نام" name="FName" />
              <UserFormInput label="نام خانوادگی" name="LName" />
              <DateInput
                label="تاریخ تولد"
                labelPlacement="outside"
                value={dateInputValue}
                onChange={(e) => setDateInputValue(e)}
                classNames={{
                  input: "font-bold",
                  inputWrapper:
                    "bg-white dark:bg-dark-200 shadow-none border-2 p-[19px] border-primary rounded-lg hover:bg-white",
                  label: "text-primary text-md",
                }}
              />
              <UserFormInput label="شماره ملی" name="NationalCode" />
              <UserFormInput label="شماره همراه" name="PhoneNumber" />
              <UserFormInput label="آدرس" name="HomeAdderess" />
              <UserFormInput label="درباره من" name="UserAbout" />
              <UserFormInput label="ایمیل" name="Email" />
              <UserFormInput label="لینک تلگرام" name="TelegramLink" />
              <UserFormInput label="پروفایل لینکدین" name="LinkdinProfile" />
            </div>
            <div className="flex justify-center sm:justify-end mt-8">
              <Button
                color="primary"
                className="text-lg px-10 py-6"
                type="submit"
              >
                ثبت اطلاعات
              </Button>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
}

export default UserForm;
