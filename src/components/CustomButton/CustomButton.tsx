import { ReactNode } from "react";

import "./CustomButton.style.scss";

interface Props {
  children: ReactNode;
}

const CustomButton: React.FC<Props> = ({ children }) => {
  return <button className="custom-button">{children}</button>;
};

export default CustomButton;
