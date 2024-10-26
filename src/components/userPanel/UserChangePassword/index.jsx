import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/Provider";
import { Button } from "@nextui-org/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { changePassword } from "../../../core/api/userPanel/ChangePassword";
import ChangePasswordInput from "./ChangePasswordInput";

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
    setUserNavTitle("تغییر رمز عبور");
  }, []);

  return (
    <Formik
      initialValues={{ oldPassword: "", newPassword: "" }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        changePassword(values.oldPassword, values.newPassword).then(() =>
          resetForm()
        );
      }}
    >
      <Form className="mt-28 mx-6">
        <div className="flex flex-col gap-5 max-w-[450px] mx-auto p-8 rounded-2xl shadow-2xl dark:shadow-none dark:border-2 dark:border-primary">
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
