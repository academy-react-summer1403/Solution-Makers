import { Code } from "@nextui-org/react";

function ErrorBox() {
  return (
    <div className="flex items-center justify-center m-4">
      <Code
        className="text-center font-bold text-ellipsis whitespace-nowrap overflow-hidden text-lg lg:text-xl p-5 w-full"
        color="danger"
      >
        دریافت اطلاعات با خطا مواجه گردید
      </Code>
    </div>
  );
}

export default ErrorBox;
