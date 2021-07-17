import React from "react";
import BannerStyles, {
  BannerPhotoStyles,
  TitleStyles,
  DescriptionStyles,
} from "./styles";
import useResponsive from "../../helpers/useMediaQuery";
import { Col } from "antd";

interface Props {
  img: string;
  title: string;
  description: string;
  direction: "right" | "left";
  ButtonArea: React.ReactNode;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

const Banner: React.FC<Props> = ({
  img,
  title,
  description,
  direction,
  ButtonArea,
  backgroundColor,
  titleColor,
  descriptionColor,
}) => {
  const { sm } = useResponsive();
  const BannerPhoto = () => <BannerPhotoStyles src={img} alt="banner-photo" />;
  const Title = () => (
    <TitleStyles style={{ color: titleColor || "#fff" }}>{title}</TitleStyles>
  );
  const Description = () => (
    <DescriptionStyles style={{ color: descriptionColor || "#fff" }}>
      {description}
    </DescriptionStyles>
  );

  return (
    <BannerStyles
      style={{ backgroundColor: backgroundColor || "transparent" }}
      align="middle"
    >
      {sm ? (
        <Col span={24}>
          <BannerPhoto />
          <Title />
          <Description />
          {ButtonArea}
        </Col>
      ) : direction === "right" ? (
        <>
          <Col span={12}>
            <BannerPhoto />
          </Col>
          <Col span={12}>
            <Title />
            <Description />
            {ButtonArea}
          </Col>
        </>
      ) : (
        <>
          <Col span={12}>
            <Title />
            <Description />
            {ButtonArea}
          </Col>
          <Col span={12}>
            <BannerPhoto />
          </Col>
        </>
      )}
    </BannerStyles>
  );
};

export default Banner;
