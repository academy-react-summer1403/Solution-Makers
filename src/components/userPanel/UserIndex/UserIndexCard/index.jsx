import { FaEye, FaStar, FaRegStar } from "react-icons/fa";

function UserIndexCard({
  courseTitle,
  teacheName,
  tumbImageAddress,
  typeName,
  title,
  currentView,
  currentRate,
  currentImageAddressTumb,
}) {
  return (
    <div className="w-full h-full flex gap-4 flex-col lg:flex-row p-4">
      <div className="w-full h-[220px] lg:h-full lg:w-[15%] rounded-2xl overflow-hidden">
        <img
          src={
            tumbImageAddress ||
            currentImageAddressTumb ||
            "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
          }
          className="h-full w-full"
        />
      </div>

      <div className="w-full lg:w-[85%] flex gap-2 flex-col justify-between">
        <span className="text-start text-lg">
          {courseTitle && courseTitle}
          {title && title}
        </span>

        <div className="flex flex-col items-start md:items-center md:flex-row sm:justify-between">
          {teacheName && (
            <span className="text-lg">مدرس : {teacheName}</span>
          )}
          {typeName && (
            <span className="text-lg">نوع دوره : {typeName}</span>
          )}
          {currentView && (
            <span className="flex items-center gap-2 text-lg">
              {currentView} بازدید <FaEye />
            </span>
          )}
          {currentRate && (
            <span className="flex items-center py-1 gap-1 text-lg">
              امتیاز :
              {new Array(Math.ceil(currentRate)).fill(0).map((item, index) => (
                <FaStar key={index} color="#FFC107" className="mb-1" />
              ))}
              {new Array(5 - Math.ceil(currentRate))
                .fill(0)
                .map((item, index) => (
                  <FaRegStar key={index} color="#FFC107" className="mb-1" />
                ))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserIndexCard;
