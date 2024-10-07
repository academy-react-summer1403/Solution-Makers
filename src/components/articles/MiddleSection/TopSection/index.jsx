import { useContext } from "react";
import SearchInput from "../../../common/SearchInput";
import TopSectionTabs from "./Tabs";
import { AppContext } from "../../../../context/Provider";

function TopSection() {
  const { articlesQuery, setArticlesQuery } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-5 lg:gap-8 justify-center items-center md:flex-row">
      <div className="w-full md:w-[60%]">
        <SearchInput
          placeholder="دنبال چی میگیردی ؟"
          query={articlesQuery}
          setQuery={setArticlesQuery}
        />
      </div>
      <div className="w-full md:w-[40%]">
        <TopSectionTabs />
      </div>
    </div>
  );
}

export default TopSection;
