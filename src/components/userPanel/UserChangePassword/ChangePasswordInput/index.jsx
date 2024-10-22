import { ErrorMessage, Field } from "formik";

function ChangePasswordInput({ label, name }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-primary dark:text-white">{label}</label>
      <Field name={name} className="border-primary border-2 outline-none my-1 p-3 rounded-lg dark:bg-dark-200" />
      <ErrorMessage name={name} component="span" className="text-red-500" />
    </div>
  );
}

export default ChangePasswordInput;
