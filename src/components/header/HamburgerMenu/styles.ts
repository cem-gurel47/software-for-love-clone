import styled from "styled-components";
import { Drawer } from "antd";
import { NavButton as NavButtonDefault } from "../styles";
import Button from "../../Button";

export default styled(Drawer)`
  .ant-drawer-body {
    padding-top: 50px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #e1e4e9;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const ContactUsButton = styled(Button).attrs(() => ({
  buttonType: "primary",
  buttonSize: "cover",
}))``;

export const NavButton = styled(NavButtonDefault)`
  margin-top: 18px;
`;
