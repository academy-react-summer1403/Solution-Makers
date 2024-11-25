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
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../../../context/Provider";

function FilterSection({ onclose }) {
  const {
    courseLevelId,
    setCourseLevelId,
    courseTypeId,
    setCourseTypeId,
    teacherId,
    setTeacherId,
    listTech,
    setListTech,
    setTechCount,
    setCostDown,
    setCostUp,
    setReFetch,
  } = useContext(AppContext);

  const [technologies, setTechnologies] = useState([]);
  const [courseTypes, setCourseTypes] = useState([]);
  const [courseLevels, setCourseLevels] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [price, setPrice] = useState([0, 100000000]);

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

  useEffect(() => {
    setCostDown(price[0].toString());
    setCostUp(price[1].toString());
  }, [price]);

  const removeFilters = () => {
    setCourseLevelId("");
    setCourseTypeId("");
    setTeacherId("");
    setListTech([]);
    setTechCount(0);
    setCostDown("");
    setCostUp("");
    setPrice([0, 100000000]);
    setReFetch(true);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-3 dark:bg-dark-200">
      <div className="bg-gray dark:bg-dark-100 h-12 rounded-2xl flex justify-between items-center px-2">
        <p className="flex items-center gap-2 text-lg">
          <BiFilterAlt size={25} />
          فیلترها
        </p>
        <span
          className="bg-[#F44336] p-1 rounded-xl cursor-pointer"
          onClick={removeFilters}
        >
          <HiOutlineTrash size={25} color="white" />
        </span>
      </div>
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          title="تکنولوژی"
          indicator={<PiCaretLeft />}
          className="border-b-1 border-gray pb-3 mt-3"
        >
          <div className="flex flex-col gap-2">
            {technologies.map((tech) => (
              <Checkbox
                key={tech.id}
                value={tech.id}
                isSelected={listTech.includes(String(tech.id))}
                onChange={(e) => {
                  if (e.target.checked) {
                    if (listTech.some((item) => item == e.target.value)) {
                      return;
                    } else {
                      setListTech([...listTech, e.target.value]);
                      setTechCount((prev) => prev + 1);
                    }
                  } else {
                    setListTech(
                      listTech.filter((item) => item != e.target.value)
                    );
                    setTechCount((prev) => prev - 1);
                  }
                }}
              >
                {tech.techName.substring(1)}
              </Checkbox>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem
          key="2"
          title="نوع کلاس"
          indicator={<PiCaretLeft />}
          className="border-b-1 border-gray pb-3"
        >
          <div className="flex flex-col gap-2">
            {courseTypes.map((type) => (
              <Checkbox
                key={type.id}
                value={type.id}
                isSelected={courseTypeId == type.id}
                onChange={(e) => {
                  e.target.checked
                    ? setCourseTypeId(e.target.value)
                    : setCourseTypeId(undefined);
                }}
              >
                {type.typeName}
              </Checkbox>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem
          key="3"
          title="سطح آموزشی"
          indicator={<PiCaretLeft />}
          className="border-b-1 border-gray pb-3"
        >
          <div className="flex flex-col gap-2">
            {courseLevels.map((level) => (
              <Checkbox
                key={level.id}
                value={level.id}
                isSelected={courseLevelId == level.id}
                onChange={(e) => {
                  e.target.checked
                    ? setCourseLevelId(e.target.value)
                    : setCourseLevelId(undefined);
                }}
              >
                {level.levelName}
              </Checkbox>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem
          key="4"
          title="اساتید"
          indicator={<PiCaretLeft />}
          className="border-b-1 border-gray pb-3"
        >
          <div className="flex flex-col gap-2">
            {teachers.map((teacher) => {
              if (teacher.fullName) {
                return (
                  <Checkbox
                    key={teacher.teacherId}
                    value={teacher.teacherId}
                    isSelected={teacherId == teacher.teacherId}
                    onChange={(e) => {
                      e.target.checked
                        ? setTeacherId(teacher.teacherId.toString())
                        : setTeacherId(undefined);
                    }}
                  >
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
          indicator={<PiCaretLeft />}
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
            <p className="text-black dark:text-white font-medium text-[18px] mt-2">
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
        <Button
          className="text-md"
          color="primary"
          onClick={() => {
            setReFetch(true);
            onclose && onclose();
          }}
        >
          اعمال فیلتر
        </Button>
      </div>
    </div>
  );
}

export default FilterSection;
