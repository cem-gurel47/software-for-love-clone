import styled from "styled-components";
import { Input } from "antd";
import Container from "../components/Banner/styles";
import Button from "../components/Button";

export default styled(Container).attrs(() => ({
  justify: "center",
  align: "middle",
}))`
  padding-bottom: 50px;
  padding-top: 50px;
`;

export const FormContainer = styled(Container).attrs(() => ({
  justify: "center",
  align: "middle",
}))`
  padding-bottom: 50px;
  padding-top: 50px;
  background: #f5f6f7;
`;

export const PrimaryButton = styled(Button).attrs(() => ({
  buttonType: "primary",
  weight: "bold",
}))`
  min-width: 140px;
  margin-right: 15px;
`;

export const SecondaryButton = styled(Button).attrs(() => ({
  buttonType: "secondary",
  weight: "bold",
}))``;

export const TextArea = styled(Input.TextArea)``;
