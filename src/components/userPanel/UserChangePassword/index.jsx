import { Button } from "@nextui-org/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ChangePasswordInput from "./ChangePasswordInput";
import toast from "react-hot-toast";
import instance from "../../../core/services/middleware";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/Provider";

function UserChangePassword() {
  const { setUserNavTitle } = useContext(AppContext);

  const schema = Yup.object({
    oldPassword: Yup.string()
      .min(6, "حداقل 6 کاراکتر")
      .required("لطفا رمز عبور فعلی خود را وارد کنید"),
    newPassword: Yup.string()
      .min(6, "حداقل 6 کاراکتر")
      .required("لطفا رمز عبور جدید خود را وارد کنید"),
  });

  useEffect(() => {
    setUserNavTitle("تغییر رمز عبور")
  }, []);

  return (
    <Formik
      initialValues={{ oldPassword: "", newPassword: "" }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        toast
          .promise(
            instance.post("/SharePanel/ChangePassword", {
              oldPassword: values.oldPassword,
              newPassword: values.newPassword,
            }),
            {
              loading: "در حال پردازش",
              success: "اطلاعات با موفقیت ثبت شد",
              error: "لطفا رمز عبور فعلی اشتباه است",
            }
          )
          .then(() => resetForm());
      }}
    >
      <Form className="mt-28 mx-6">
        <div className="flex flex-col gap-3 max-w-[450px] mx-auto p-8 rounded-2xl shadow-2xl dark:shadow-none dark:border-2 dark:border-primary">
          <ChangePasswordInput label="رمز عبور فعلی" name="oldPassword" />
          <ChangePasswordInput label="رمز عبور جدید" name="newPassword" />
          <Button
            color="primary"
            className="text-lg px-10 py-6 mt-5 dark:bg-dark-200 dark:border-2 dark:border-primary"
            type="submit"
          >
            ثبت تغییرات
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

export default UserChangePassword;
