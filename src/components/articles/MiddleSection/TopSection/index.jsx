import SearchInput from "../../../common/SearchInput";
import TopSectionTabs from "./Tabs";

function TopSection() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 justify-center items-center md:flex-row">
      <div className="w-full md:w-[60%]">
        <SearchInput placeholder="دنبال چی میگیردی ؟" />
      </div>
      <div className="w-full md:w-[40%]">
        <TopSectionTabs />
      </div>
    </div>
  );
}

export default TopSection;
