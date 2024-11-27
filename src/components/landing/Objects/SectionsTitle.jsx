const SectionsTitle = ({ name }) => {
  return (
    <div className="w-full sm:w-1/4 mx-auto text-center cursor-default px-5">
      <h3 className="text-2xl">{name}</h3>
      <div className=" w-full rounded-full h-[4px] bg-gradient-to-r from-[#e7f0fc] from-0% via-[#2196F366] via-50% to-[#e7f0fc] to-100% ">
        {" "}
      </div>
    </div>
  );
};

export default SectionsTitle;
