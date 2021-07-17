import styled from "styled-components";
import { Row, Image, Typography } from "antd";

export default styled(Row)`
  width: 100%;
  padding: 10px 25%;
  padding-left: 150px;
  padding-right: 150px;

  @media only screen and (max-width: 1200px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media only screen and (max-width: 992px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const BannerPhotoStyles = styled(Image).attrs(() => ({
  preview: false,
}))``;

export const TitleStyles = styled(Typography.Text)`
  display: block;
  margin-bottom: 18px;
  font-size: 2.625em;
  font-weight: 700;

  @media only screen and (max-width: 640px) {
    font-size: 2.25em;
  }
`;

export const DescriptionStyles = styled(Typography.Text)`
  font-size: 14px;
`;
