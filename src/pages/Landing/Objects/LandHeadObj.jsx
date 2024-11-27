const LandHeadObj = ({ icon, title, countNum }) => {
  return (
    <div className="flex flex-col items-center gap-[5px] p-4 justify-center rounded-[20px] border-[3px] border-white dark:border-dark-100 backdrop-blur-[20px]">
      <span className="bg-primary p-1 xs:p-3 sm:p-4 md:p-5 rounded-xl text-[30px] sm:text-[35px] lg:text-[40px]">{icon}</span>
      <h1 className="text-[20px] lg:text-[36px]">{countNum}</h1>
      <p className="text-[20px] lg:text[24px]">{title}</p>
    </div>
  );
};

export default LandHeadObj;
