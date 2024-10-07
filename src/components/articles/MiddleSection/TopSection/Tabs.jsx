import { Tabs, Tab } from "@nextui-org/react";
import { useContext } from "react";
import { AppContext } from "../../../../context/Provider";
function TopSectionTabs() {
  const { setArticlesSortingCol, setReFetch } = useContext(AppContext);

  return (
    <div className="hidden xs:flex w-full rounded-xl flex-col sm:shadow-lg">
      <Tabs
        aria-label="Options"
        onSelectionChange={(e) => {
          setArticlesSortingCol(e);
          setReFetch(true);
        }}
        classNames={{
          base: "mx-20 sm:mx-0",
          tabList: "w-full gap-2 lg:gap-5 p-2 bg-white flex-col sm:flex-row",
          tab: "py-5",
          cursor: "bg-primary rounded-xl",
        }}
      >
        <Tab key="" title="همه" />
        <Tab key="currentView" title="پربازدیدترین ها" />
        <Tab key="updateDate" title="جدیدترین ها" />
      </Tabs>
    </div>
  );
}

export default TopSectionTabs;
