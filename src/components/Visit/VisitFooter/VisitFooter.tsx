import React from "react";

import "./VisitFooter.style.scss";

import { Icons } from "../../../assets";
import CustomButton from "../../CustomButton/CustomButton";

const VisitFooter: React.FC = () => {
  return (
    <footer className="visit-footer">
      <div className="visit-footer__container">
        <div className="volume">
          <img src={Icons.Volume} alt="" className="volume__icon" />
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            defaultValue={70}
            className="volume__input"
          />
        </div>
        <div className="visit-footer__settings">
          <div className="visit-footer__settings__item">
            <img src={Icons.Microphone} alt="" />
            <img src={Icons.ArrowTop} alt="" />
          </div>
          <div className="visit-footer__settings__item">
            <img src={Icons.Camera} alt="" />
            <img src={Icons.ArrowTop} alt="" />
          </div>
        </div>
        <CustomButton>Leaving Meeting</CustomButton>
      </div>
    </footer>
  );
};

export default VisitFooter;
