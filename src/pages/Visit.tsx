import React from "react";

import VisitHeader from "../components/Visit/VisitHeader/VisitHeader";
import VisitFooter from "../components/Visit/VisitFooter/VisitFooter";
import VisitContent from "../components/Visit/VisitContent/VisitContent";

const Visit: React.FC = () => {
  return (
    <>
      <VisitHeader />
      <VisitContent />
      <VisitFooter />
    </>
  );
};

export default Visit;
