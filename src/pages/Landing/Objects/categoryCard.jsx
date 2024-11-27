const CategoryCard = ({ catDescription, catTitle, icon, bgColor }) => {
  return (
    <div className="shadow shadow-[#ccc] dark:border-[#707070] dark:bg-dark-100 ease-in duration-150 text-center flex flex-col flex-nowrap justify-center gap-[8px] items-center rounded-[40px] bg-white hover:scale-[1.05] hover:cursor-pointer p-2">
      <span
        className={`bg-[${bgColor}] p-6 rounded-xl flex justify-center items-center text-[35px]`}
      >
        {icon}
      </span>
      <div>
        <h1>{catTitle}</h1>
        <p className="mt-[8px]">{catDescription}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
