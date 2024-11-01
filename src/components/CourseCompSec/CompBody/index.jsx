import React from "react";
import CompCard from "../../common/Comparison/CompCard";
import CompDetail from "../../common/Comparison/CompDetail";

const CompBody = () => {
  return (
    <>
      <div className="flex flex-row-reverse gap-6">
        <div>
          <CompCard title="title" />
          <CompCard title="teacher" />
        </div>
        <div>
          <CompDetail title="t1" />
          <CompDetail title="reza" />
        </div>
        <div>
          <CompDetail  title="t2" />
          <CompDetail  title="mmd" />
        </div>
      </div>
    </>
  );
};

export default CompBody;
