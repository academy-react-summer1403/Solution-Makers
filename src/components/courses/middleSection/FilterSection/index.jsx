import {
  Accordion,
  AccordionItem,
  Checkbox,
  Slider,
  Button,
} from "@nextui-org/react";
import { HiOutlineTrash } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";
import { PiCaretLeft } from "react-icons/pi";
import { useEffect, useState } from "react";
import axios from "axios";

function FilterSection() {
  const [technologies, setTechnologies] = useState([]);
  const [courseTypes, setCourseTypes] = useState([]);
  const [courseLevels, setCourseLevels] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [price, setPrice] = useState([0, 5000000]);

  useEffect(() => {
    axios
      .get("https://classapi.sepehracademy.ir/api/Home/GetTechnologies")
      .then((res) => setTechnologies(res.data));
    axios
      .get("https://classapi.sepehracademy.ir/api/CourseType/GetCourseTypes")
      .then((res) => setCourseTypes(res.data));
    axios
      .get(
        "https://classapi.sepehracademy.ir/api/CourseLevel/GetAllCourseLevel"
      )
      .then((res) => setCourseLevels(res.data));
    axios
      .get("https://classapi.sepehracademy.ir/api/Home/GetTeachers")
      .then((res) => setTeachers(res.data));
  }, []);

  return (
    <div className="hidden lg:block lg:w-[30%] xl:w-[25%] mt-3">
      <div className="bg-white rounded-xl p-3">
        <div className="bg-gray h-12 rounded-2xl flex justify-between items-center px-2">
          <p className="flex items-center gap-2 text-lg">
            <BiFilterAlt size={25} />
            فیلترها
          </p>
          <span className="bg-[#F44336] p-1 rounded-xl cursor-pointer">
            <HiOutlineTrash size={25} color="white" />
          </span>
        </div>
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            title="تکنولوژی"
            indicator={<PiCaretLeft color="black" />}
            className="border-b-1 border-gray pb-3 mt-3"
          >
            <div className="flex flex-col gap-2">
              {technologies.map((tech) => (
                <Checkbox key={tech.id} value="buenos-aires">
                  {tech.techName.substring(1)}
                </Checkbox>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            key="2"
            title="نوع کلاس"
            indicator={<PiCaretLeft color="black" />}
            className="border-b-1 border-gray pb-3"
          >
            <div className="flex flex-col gap-2">
              {courseTypes.map((type) => (
                <Checkbox key={type.id} value="buenos-aires">
                  {type.typeName}
                </Checkbox>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            key="3"
            title="سطح آموزشی"
            indicator={<PiCaretLeft color="black" />}
            className="border-b-1 border-gray pb-3"
          >
            <div className="flex flex-col gap-2">
              {courseLevels.map((level) => (
                <Checkbox key={level.id} value="buenos-aires">
                  {level.levelName}
                </Checkbox>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            key="4"
            title="اساتید"
            indicator={<PiCaretLeft color="black" />}
            className="border-b-1 border-gray pb-3"
          >
            <div className="flex flex-col gap-2">
              {teachers.map((teacher) => {
                if (teacher.fullName) {
                  return (
                    <Checkbox key={teacher.teacherId} value="buenos-aires">
                      {teacher.fullName}
                    </Checkbox>
                  );
                }
              })}
            </div>
          </AccordionItem>

          <AccordionItem
            key="5"
            title="قیمت"
            indicator={<PiCaretLeft color="black" />}
            className="pb-2"
          >
            <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
              <Slider
                label="محدوده قیمت را انتخاب کنید"
                step={10000}
                maxValue={10000000}
                minValue={0}
                value={price}
                onChange={setPrice}
                className="max-w-md"
                classNames={{
                  label: "text-md",
                  value: "hidden",
                  labelWrapper: "mb-3",
                }}
              />
              <p className="text-black font-medium text-[18px] mt-2">
                از{" "}
                {Array.isArray(price) &&
                  price
                    .map(
                      (b) => `${b > 0 ? b.toLocaleString() + " " + "تومان" : b}`
                    )
                    .join(" تا ")}
              </p>
            </div>
          </AccordionItem>
        </Accordion>
        <div className="my-3">
          <Button className="text-md" color="primary">اعمال فیلتر</Button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
