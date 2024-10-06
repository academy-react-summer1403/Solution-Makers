import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

function TopSectionTabs() {
  const [selected, setSelected] = useState("photos");

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        classNames={{
          base: "mx-20 sm:mx-0",
          tabList: "w-full gap-2 lg:gap-5 p-2 bg-white flex-col sm:flex-row",
          tab: "py-5",
          cursor: "bg-primary rounded-xl",
        }}
      >
        <Tab key="all" title="همه" />
        <Tab key="favs" title="محبوب ترین ها" />
        <Tab key="mostViwed" title="پربازدیدترین ها" />
        <Tab key="newest" title="جدیدترین ها" />
      </Tabs>
    </div>
  );
}

export default TopSectionTabs;
