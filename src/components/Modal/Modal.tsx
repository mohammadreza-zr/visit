import React, { ReactNode } from "react";

import "./Modal.style.scss";

interface Props {
  children?: ReactNode;
  close?: any;
}

const Modal: React.FC<Props> = ({ children, close }) => {
  return (
    <div className="modal">
      <div onClick={close} className="modal__background"></div>
      <div className="modal__container">{children}</div>
    </div>
  );
};

export default Modal;
