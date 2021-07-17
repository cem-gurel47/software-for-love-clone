import styled from "styled-components";
import { Row, Image, Typography } from "antd";
import Button from "../Button";
import LogoSrc from "../../images/sfl-logo.png";

export default styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 25%;
  padding-left: 150px;
  padding-right: 150px;
  border-bottom: 1px solid #e1e4e9;

  @media only screen and (max-width: 1200px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media only screen and (max-width: 992px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Logo = styled(Image).attrs(() => ({
  preview: false,
  src: LogoSrc,
  alt: "Logo",
}))`
  cursor: pointer;
  margin-bottom: -10px;
`;

export const NavButtonsContainer = styled(Row)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ContactUsButton = styled(Button).attrs(() => ({
  buttonType: "primary",
  weight: "bold",
}))`
  font-size: 12px;
`;

export const NavButton = styled.a`
  color: #536171;
  font-size: 12.25px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;
