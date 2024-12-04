import { useContext } from "react";
import { AppContext } from "../../../../context/Provider";
import SearchInput from "../../../common/SearchInput";
import TopSectionTabs from "./Tabs";
import Category from "./Category";

function TopSection() {
  const { articlesQuery, setArticlesQuery } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-5 lg:gap-8 justify-center items-center md:flex-row">
      <div className="w-full md:w-[50%]">
        <SearchInput
          placeholder="دنبال چی میگیردی ؟"
          query={articlesQuery}
          setQuery={setArticlesQuery}
        />
      </div>
      <div className="w-full md:w-[20%]"><Category /></div>
      <div className="w-full md:w-[30%]">
        <TopSectionTabs />
      </div>
    </div>
  );
}

export default TopSection;
