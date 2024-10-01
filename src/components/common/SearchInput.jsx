import { Input } from "@nextui-org/react";
import { useContext } from "react";
import { AppContext } from "../../context/Provider";
import { RiSearch2Fill } from "react-icons/ri";

function SearchInput() {
  const { searchKey, setSearchKey } = useContext(AppContext);

  return (
    <div className="bg-white text-sm sm:text-lg flex items-center w-full rounded-2xl shadow-[0_8px_24px_rgba(149,157,165,0.2)] group has-[:focus]:border-3 has-[:focus]:border-primary">
      <Input
        placeholder="چی میخوای یاد بگیری ؟"
        aria-label="searchKey"
        value={searchKey}
        onValueChange={setSearchKey}
        endContent={
          <span className="p-1">
            <RiSearch2Fill size={25} className="text-primary mx-2" />
          </span>
        }
        size="lg"
        classNames={{
          inputWrapper: "bg-white px-2 h-14",
        }}
      />
    </div>
  );
}

export default SearchInput;
