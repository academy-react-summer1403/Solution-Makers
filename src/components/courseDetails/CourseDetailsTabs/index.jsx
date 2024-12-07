import { Tab, Tabs } from "@nextui-org/react";

function CourseDetailsTabs({ setShowBox }) {
  return (
    <div className="flex justify-center w-full rounded-xl sm:flex-col mb-10 shadow-xl">
      <Tabs
        aria-label="Options"
        onSelectionChange={(e) => {
          setShowBox(e);
        }}
        classNames={{
          base: "mx-20 sm:mx-0",
          tabList: "w-full gap-2 lg:gap-5 p-2 bg-white flex-col sm:flex-row dark:bg-dark-100",
          tab: "py-5",
          cursor: "bg-primary rounded-xl dark:border dark:bg-dark-200",
        }}
      >
        <Tab key="descriptions" title="توضیحات" />
        {/* <Tab key="previews" title="پیش نمایش ها" /> */}
        <Tab key="comments" title="نظرات" />
        <Tab key="details" title="جزئیات" className="lg:hidden" />
      </Tabs>
    </div>
  );
}

export default CourseDetailsTabs;
