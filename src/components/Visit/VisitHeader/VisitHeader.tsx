import React from "react";

import "./VisitHeader.style.scss";

const VisitHeader: React.FC = () => {
  return (
    <header className="visit-header">
      <div className="visit-header__container">
        <h2>Alice Warner</h2>
        <div className="circle-container">
          <span className="circle">
            <span className="circle__center"></span>
          </span>
          <span>13:03:34</span>
        </div>
      </div>
    </header>
  );
};

export default VisitHeader;
