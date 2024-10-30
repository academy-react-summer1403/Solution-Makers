import {
  Card,
  CardContent,
} from "@/components/ui/card";

const Slides = () => {
  return (
    <div className="p-1 ">
      <Card className=" h-[382px] bg-none hover:scale-[1.01] duration-200 hover:cursor-pointer ">
        <CardContent className=" flex flex-col items-center aspect-square gap-[10px] p-0">
          <div className="  relative  w-full rounded-[25px] overflow-hidden ">
            <img
              src="/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
              alt=""
            />
            <span className=" absolute ">
              202
            </span>
          </div>
          <h1 className=" text-[24px] ">
            استاد
          </h1>
          <p className=" text-[16px] ">
            برنامه نویسی
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Slides;
