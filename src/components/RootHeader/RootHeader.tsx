import { FC } from "react";
import { Link } from "react-router-dom";

import "./RootHeader.style.scss";

const RootHeader: FC = () => {
  return (
    <div className="root-header">
      <Link to="/" className="root-header__link">
        Home
      </Link>
      <Link to="/visit" className="root-header__link">
        Visit
      </Link>
    </div>
  );
};

export default RootHeader;
