import styled from "styled-components";
import { Button } from "antd";

interface Type {
  borderColor: string;
  backgroundColor: string;
  color: string;
}

const typePicker = (type: string): Type => {
  switch (type) {
    case "primary":
      return {
        borderColor: "#394a74",
        backgroundColor: "#394a74",
        color: "#fff",
      };
    case "secondary":
      return {
        borderColor: "#394a74",
        backgroundColor: "#fff",
        color: "#394a74",
      };

    default:
      return {
        borderColor: "transparent",
        backgroundColor: "#fff",
        color: "#394a74",
      };
  }
};

interface SizeType {
  width: string;
  height: string;
}

const sizePicker = (type: string | undefined): SizeType => {
  switch (type) {
    case "small":
      return {
        width: "118px",
        height: "32px",
      };
    case "large":
      return {
        width: "286px",
        height: "48px",
      };
    case "cover":
      return {
        width: "100%",
        height: "32px",
      };
    default:
      return {
        width: "108px",
        height: "35px",
      };
  }
};

export default styled(Button)<{
  buttonType?: "primary" | "secondary";
  buttonSize: "large" | "small" | "cover" | undefined;
  weight: "bold" | undefined;
}>`
  border: ${({ buttonType }) =>
    `2px solid ${typePicker(buttonType).borderColor}`};
  background: ${({ buttonType }) => typePicker(buttonType).backgroundColor};
  color: ${({ buttonType }) => typePicker(buttonType).color};
  width: ${({ buttonSize }) => sizePicker(buttonSize).width};
  height: ${({ buttonSize }) => sizePicker(buttonSize).height};
  font-weight: ${({ weight }) => (weight === "bold" ? 700 : 400)};

  border-radius: 5px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
