import styled from "styled-components";
import { Form as DefaultForm, Input as DefaultInput, Typography } from "antd";
import FormContainer from "../components/Banner/styles";
import Button from "../components/Button";

export default styled(FormContainer).attrs(() => ({
  align: "middle",
}))``;

export const Form = styled(DefaultForm)``;

export const Text = styled(Typography.Text)`
  font-size: 2.625em;
  font-weight: 700;
  color: #282f36;

  @media only screen and (max-width: 640px) {
    font-size: 2.25em;
  }
`;

export const Description = styled(Typography.Text)`
  color: #536171;
  display: block;
`;

export const Input = styled(DefaultInput).attrs(() => ({
  size: "large",
}))`
  width: 100%;
`;

export const Label = styled(Description)`
  font-weight: 700;
`;

export const SubmitButton = styled(Button).attrs(() => ({
  buttonType: "primary",
  weight: "bold",
}))``;
