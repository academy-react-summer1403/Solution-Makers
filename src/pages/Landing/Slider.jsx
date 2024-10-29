import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Slides from "./Objects/Slides";
import SectionsTitle from "./Objects/SectionsTitle";

const Slider = () => {
  return (
    <div className=" flex flex-col justify-center gap-[7px] items-center bg-[#E3F2FD] dark:bg-dark-100 h-[748px]  ">
      <div>
        <SectionsTitle name="اساتید برتر" />
      </div>

      <Carousel
        className="mt-[50px] "
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-[1280px] h-[446px] p-0  flex-row-reverse odd:mt-0 ">
          {Array.from({
            length: 6,
          }).map((_, index) => (
            <CarouselItem
              className=" mb-0 h-[382px] basis-1/4 even:mt-[55px] "
              key={index}
            >
              <Slides />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" border-[3px] left-[-8px] bg-[#2196F3]  " />
        <CarouselNext className=" border-[3px] right-[-8px] bg-[#2196F3] " />
      </Carousel>
    </div>
  );
};
export default Slider;
