import { ErrorMessage, Field } from "formik";

function UserFormInput({ label, name }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-primary">{label}</label>
      <Field name={name} className="border-primary border-2 outline-none my-1 p-2 rounded-lg dark:bg-dark-200" />
      <ErrorMessage name={name} component="span" className="text-red-500" />
    </div>
  );
}

export default UserFormInput;
