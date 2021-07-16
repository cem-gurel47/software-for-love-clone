import React from "react";
import ButtonStyles from "./styles";
import { ButtonProps } from "antd/lib/button";

interface IButtonProps extends ButtonProps {
  buttonType?: "primary";
  buttonSize?: "large" | "small" | "cover";
  weight?: "bold";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { buttonType, buttonSize, weight, children, className, ...rest } =
    props;
  return (
    <ButtonStyles
      buttonType={buttonType}
      buttonSize={buttonSize}
      className={className}
      weight={weight}
      {...rest}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
