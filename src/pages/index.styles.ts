import styled from "styled-components";
import { Row, Col, Typography } from "antd";
import Button from "../components/Button";

export default styled(Row)`
  width: 100%;
  margin-top: 24px;
`;

export const PrimaryButton = styled(Button).attrs(() => ({
  buttonType: "primary",
  buttonSize: "cover",
  weight: "bold",
}))`
  min-width: 140px;
`;

export const VolunteerButton = styled(Button).attrs(() => ({
  buttonSize: "cover",
  weight: "bold",
}))`
  min-width: 100px;
`;

export const Text = styled(Typography.Text)`
  font-size: 2.25em;
  text-align: center;
  font-weight: 700;
  margin-top: 45px;
  @media only screen and (max-width: 640px) {
    font-size: 1.875em;
  }
`;

export const SecondaryButton = styled(Button).attrs(() => ({
  buttonType: "secondary",
  buttonSize: "cover",
  weight: "bold",
}))`
  margin-top: 24px;
`;
