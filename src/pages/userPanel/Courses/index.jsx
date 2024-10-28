import { Tab, Tabs } from "@nextui-org/react";
import UserCourses from "../../../components/userPanel/UserCourses";
import UserReserveCourses from "../../../components/userPanel/UserReserveCourses";
import { useState } from "react";

function UserPanelCourses() {
  const [selected, setSelected] = useState("myCourses");

  return (
    <div
      className={`flex flex-col py-10 ${
        selected == "reserveCourses" ? "gap-10" : ""
      }`}
    >
      <div className="flex w-full flex-col sm:px-10">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="bordered"
          classNames={{
            base: "mx-20 sm:mx-0",
            tabList:
              "w-full gap-2 lg:gap-5 p-2 bg-white flex-col sm:flex-row dark:bg-dark-100",
            tab: "py-5",
            cursor: "bg-primary rounded-xl dark:bg-dark-200 dark:border-2",
          }}
        >
          <Tab key="myCourses" title="دوره های ثبت شده"></Tab>
          <Tab key="reserveCourses" title="رزرو شده ها"></Tab>
        </Tabs>
      </div>
      {selected == "myCourses" ? <UserCourses /> : <UserReserveCourses />}
    </div>
  );
}

export default UserPanelCourses;
