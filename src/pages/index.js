import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Banner from "../components/Banner";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import HomePageGif from "../images/homepage.gif";
import HomePageSecondaryImage from "../images/homepage-2.png";
import HomePageTertiaryImage from "../images/homepage-3.png";
import ButtonsContainer, {
  PrimaryButton,
  VolunteerButton,
  SecondaryButton,
  Text,
} from "./index.styles";
import { Row, Col } from "antd";

const PrimaryButtonsContainer = () => (
  <ButtonsContainer gutter={[16, 16]}>
    <Col xs={24} sm={9} md={10}>
      <PrimaryButton>Partner With Us</PrimaryButton>
    </Col>
    <Col xs={24} sm={6}>
      <VolunteerButton>Volunteer</VolunteerButton>
    </Col>
  </ButtonsContainer>
);

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Banner
      img={HomePageGif}
      backgroundColor="#9ba9d0"
      title="Software for Love"
      direction="left"
      ButtonArea={<PrimaryButtonsContainer />}
      description="Software For Love is a non-profit organization that focuses on providing software solutions. We are a team of young professionals who are passionate about technology and seek to give back to our community."
    />
    <Row justify="center">
      <Text>About Us</Text>
    </Row>
    <Banner
      img={HomePageSecondaryImage}
      title="What We Do"
      titleColor="#282f36"
      direction="left"
      description="Our team is dedicated to providing a variety of services such as web development, UI/UX design, data analytics, and database management. We seek to develop software for clients in return for a charitable contribution, or a charitable service provided by an organization."
      descriptionColor="#536171"
      ButtonArea={
        <Col xs={24} sm={9} md={10}>
          <SecondaryButton>Partner With Us</SecondaryButton>
        </Col>
      }
    />
    <Banner
      img={HomePageTertiaryImage}
      title="Join The Team"
      titleColor="#282f36"
      direction="right"
      description="Our platform encourages students to showcase their skills and abilities, while also providing back to the community. We actively recruit new talent for marketing, finance, engineering, and more."
      descriptionColor="#536171"
      ButtonArea={
        <Col xs={24} sm={9} md={10} style={{ marginTop: "24px" }}>
          <PrimaryButton>Apply today</PrimaryButton>
        </Col>
      }
    />
  </Layout>
);

export default IndexPage;
