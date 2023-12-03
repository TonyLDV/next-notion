import React, { FC, ReactNode } from "react";

type PropsT = {
  text?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const CustomButton: FC<PropsT> = ({ text, className, children, onClick }) => {
  return (
    <button
      className={`font-bold cursor-pointer ${className}`}
      onClick={onClick}
      type="button"
    >
      {text}
      {children}
    </button>
  );
};

export default CustomButton;
