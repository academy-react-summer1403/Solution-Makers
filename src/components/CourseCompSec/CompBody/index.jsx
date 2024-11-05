import React from "react";

import { Button } from "@nextui-org/react";
import DetailWrapper from "../../common/Comparison/DetailWrapper";

const CompBody = ({ title, image, list }) => {
  return (
    <>
      <div className="bg-primary-200 flex flex-col items-center w-[300px] lg:w-[350px] rounded-xl border-1 border-primary-300">
        <img
          src={image}
          alt=""
          className="w-[250px] h-[150px] relative top-[-70px] rounded-lg"
        />
        <h3 className="text-center text-xl lg:text-2xl mt-[-30px] mb-2">
          {title}
        </h3>
        <DetailWrapper detailList={list} />
        <Button color="primary" size="lg" className="rounded-full my-3">
          شرکت در دوره
        </Button>
      </div>
    </>
  );
};

export default CompBody;
