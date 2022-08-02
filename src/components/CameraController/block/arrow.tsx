import React from "react";

import { Position } from "./position.enum";

interface Props {
  position?: Position;
}

const Arrow: React.FC<Props> = ({ position }) => {
  return (
    <svg
      width="15"
      height="26"
      viewBox="0 0 15 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: position }}
    >
      <path
        d="M4.26592 0.752228L9.98694 6.47325L13.498 9.96646C14.9772 11.4457 14.9772 13.8518 13.498 15.331L4.26592 24.5631C3.05399 25.775 0.986579 24.9017 0.986579 23.2086L0.986578 13.2102L0.986578 2.10674C0.986578 0.395779 3.05399 -0.459701 4.26592 0.752228Z"
        fill="#29A9E1"
        className="arrow-path"
      />
    </svg>
  );
};

export default Arrow;
