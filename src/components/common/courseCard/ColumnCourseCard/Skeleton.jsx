import { Card, Skeleton } from "@nextui-org/react";
import { useContext } from "react";
import { AppContext } from "../../../../context/Provider";

function ColumnCourseCardSkeleton() {
  const { rowsOfPage } = useContext(AppContext);

  return (
    <Card className="space-y-5 p-4" radius="lg">
      <div
        className={`hidden md:${
          rowsOfPage == 5 ? "flex max-w-[300px] w-full items-center gap-3" : ""
        }`}
      >
        <div>
          <Skeleton className="flex rounded-xl w-72 h-52" />
        </div>
        <div className="w-full flex flex-col gap-6">
          <Skeleton className="h-8 w-[200px] rounded-lg" />
          <Skeleton className="h-9 w-[350px] rounded-lg" />
          <Skeleton className="h-8 w-[250px] rounded-lg" />
          <Skeleton className="h-9 w-[400px] rounded-lg" />
        </div>
      </div>

      <Skeleton className={`rounded-lg md:${rowsOfPage == 5 ? "hidden" : ""}`}>
        <div className="h-[330px] md:h-[275px] lg:h-[220px] rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className={`space-y-6 md:${rowsOfPage == 5 ? "hidden" : ""}`}>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-7 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-9 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-6 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-6 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

export default ColumnCourseCardSkeleton;
