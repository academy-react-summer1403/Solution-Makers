import { useLayoutEffect } from "react";
import toast from "react-hot-toast";

function CourseDescription({ googleSchema, describe }) {
  useLayoutEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <p>{googleSchema}</p>
      <p dangerouslySetInnerHTML={{ __html: describe }}></p>
    </div>
  );
}

export default CourseDescription;
