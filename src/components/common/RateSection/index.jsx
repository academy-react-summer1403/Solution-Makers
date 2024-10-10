import { Button } from "@nextui-org/react";
import { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

function RateSection({ title }) {
  const [score, setScore] = useState(0);

  return (
    <div className="flex gap-8 flex-col xl:flex-row justify-between mt-12">
      <div className="hidden xs:flex items-center gap-3">
        <div className="flex" style={{ direction: "ltr" }}>
          {new Array(score).fill(0).map((item, index) => (
            <FaStar
              key={index}
              className="cursor-pointer"
              size={28}
              color="#FFC107"
              onClick={() => setScore(index)}
            />
          ))}

          {new Array(5 - score).fill(0).map((item, index) => (
            <CiStar
              key={index}
              className="cursor-pointer"
              size={28}
              color="#FFC107"
              onClick={() => setScore(score + index + 1)}
            />
          ))}
        </div>
        <p>امتیاز بدید</p>
        <div>
          <Button className="text-[16px] text-white bg-primary rounded-full">
            ثبت امتیاز
          </Button>
        </div>
      </div>
      <div className="hidden xs:flex items-center gap-4">
        <p>{title}</p>
        <Button className="rounded-full bg-primary text-white">
          <BiLike size={22} />
        </Button>
        <Button className="rounded-full bg-primary text-white">
          <BiDislike size={22} />
        </Button>
        <Button className="rounded-full bg-primary text-white">
          <FaBookmark size={22} />
        </Button>
      </div>
    </div>
  );
}

export default RateSection;
