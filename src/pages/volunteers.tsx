import * as React from "react";
import { Row, Col } from "antd";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Banner from "../components/Banner";
import VolunteerImg from "../images/humans3.png";
import VolunteerSearchImg from "../images/volunteer.svg";
import FormContainer, {
  Form,
  Text,
  Description,
  Input,
  Label,
  SubmitButton,
} from "./volunteers.styles";
import useResponsive from "../helpers/useMediaQuery";
const { Item } = Form;
const errorMessage = "This area is required!";
export const rules = { required: true, message: errorMessage };

interface FormItemProps {
  name: string;
  label: string;
  placeholder: string;
}

export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  placeholder,
}) => (
  <Item name={name} label={<Label>{label}</Label>} rules={[rules]}>
    <Input placeholder={placeholder} />
  </Item>
);

const VolunteersPage: React.FC = () => {
  const { sm } = useResponsive();

  const Img = () => (
    <img
      src={VolunteerSearchImg}
      alt="volunteer-img"
      style={{ padding: "5%" }}
    />
  );

  const FormArea = () => (
    <>
      <Text>Apply Now</Text>
      <Form layout="vertical">
        <Description style={{ marginTop: "18px" }}>
          Are you interested in joining our team? Fill in the contact form
          below, and we will reach out to you as soon as possible.
        </Description>
        <Description
          style={{
            fontStyle: "italic",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        >
          All fields marked with * are required
        </Description>
        <FormItem
          name="firstName"
          label="First Name"
          placeholder="Your first name"
        />
        <FormItem
          name="lastName"
          label="Last Name"
          placeholder="Your last name"
        />
        <FormItem name="email" label="Email" placeholder="Your email" />
        <FormItem
          name="university"
          label="University"
          placeholder="Current institution"
        />
        <SubmitButton htmlType="submit">Submit</SubmitButton>
      </Form>
    </>
  );

  return (
    <Layout>
      <Seo title="Volunteers" />
      <Banner
        ButtonArea
        img={VolunteerImg}
        backgroundColor="#9ba9d0"
        direction="left"
        title="Volunteers"
        description="Volunteers are an essential part of Software For Love! We encourage our team to be unique and proud of their creativity. We provide a platform that allows our volunteers to demonstrate their skills and abilities while giving back to our community. Apply today to join our growing team!"
      />
      <FormContainer>
        {sm ? (
          <>
            <Col span={24}>
              <Img />
            </Col>
            <Col span={24}>
              <FormArea />
            </Col>
          </>
        ) : (
          <>
            <Col span={12}>
              <FormArea />
            </Col>
            <Col span={12}>
              <Img />
            </Col>
          </>
        )}
      </FormContainer>
    </Layout>
  );
};

export default VolunteersPage;
