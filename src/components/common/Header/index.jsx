function Header({ img, heading, reminding }) {
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-24 justify-center items-center md:items-stretch md:flex-row">
        <div className="relative w-full md:w-1/2 flex flex-col justify-center">
          <div className="hidden dark:hidden md:block absolute md:top-[25px] lg:top-[110px] xl:top-28 bg-[url(/src/assets/images/courses/quarterCircle.png)] bg-no-repeat h-[104px] w-[104px]"></div>
          <div className="hidden dark:hidden md:block absolute md:top-[235px] md:-right-12 lg:top-[250px] lg:-right-10 xl:top-[265px] right-10 bg-[url(/src/assets/images/courses/horizontalDots.png)] bg-no-repeat w-[468px] h-[154px]"></div>

          <div className="w-[196px] h-[154px] hidden dark:hidden md:block absolute md:top-[60px] md:right-[300px] lg:top-[100px] lg:right-[450px] xl:top-[120px] bg-[url(/src/assets/images/courses/verticalDots.png)] bg-no-repeat"></div>

          <div className="z-20 flex flex-col gap-6 md:ms-8 items-center bg md:items-start">
            <h2 className="text-primary text-2xl">{reminding}</h2>
            <h1 className="text-[40px] dark:text-white">{heading}</h1>
            <p className="text-[#455A64] text-justify lg:w-[526px] dark:text-white">
              آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات
              است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا
              نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={img} />
        </div>
      </div>
    </div>
  );
}

export default Header;
