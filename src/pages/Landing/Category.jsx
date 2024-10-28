import CategoryCard from "./Objects/categoryCard";

const Category = () => {
  return (
    <>
      <div className=" blendBack bg-[url(/src/pages/Landing/Objects/blend.png)] w-full flex flex-row justify-between mt-[100px] ">
        <div className=" dark:text-[#7a7878] mt-[-70px] flex w-[460px] flex-col justify-center  text-right ">
          <h1>دسته بندی دوره ها</h1>
          <p>
            لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت
            چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون
            و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی
            مورد نیاز
          </p>
        </div>
        <div className=" flex flex-row gap-[25px] ">
          <div className=" flex flex-col gap-[25px] ">
            <CategoryCard
              catTitle="تحلیل داده"
              catDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است"
              img="/src/pages/Landing/Objects/catData.png"
            />
            <CategoryCard
              catTitle="امنیت شبکه"
              catDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است"
              img="/src/pages/Landing/Objects/catSecur.png"
            />
          </div>
          <div className=" flex flex-col gap-[25px] mt-[50px] ">
            <CategoryCard
              catTitle="بازی"
              catDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است"
              img="/src/pages/Landing/Objects/catGame.png"
            />
            <CategoryCard
              catTitle="وب دیزاین"
              catDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است"
              img="/src/pages/Landing/Objects/catDisi.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
