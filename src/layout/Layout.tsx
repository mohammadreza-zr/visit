import { FC, ReactNode } from "react";

import RootFooter from "../components/RootFooter/RootFooter";
import RootHeader from "../components/RootHeader/RootHeader";

import "./Layout.style.scss";

interface Props {
  children: ReactNode;
  showHeader: boolean;
  showFooter: boolean;
}

const Layout: FC<Props> = ({
  children,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <div className="layout">
      <div className="layout__container">
        {showHeader && <RootHeader />}
        {children}
        {showFooter && <RootFooter />}
      </div>
    </div>
  );
};

export default Layout;
