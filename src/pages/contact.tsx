import * as React from "react";
import BannerStyles, {
  FormContainer,
  PrimaryButton,
  SecondaryButton,
  TextArea,
} from "./contact.styles";
import { Text, Description, Label } from "./volunteers.styles";
import { FormItem, rules } from "./volunteers";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Form, Col } from "antd";

const SecondPage = () => (
  <Layout>
    <Seo title="Contact" />
    <BannerStyles>
      <Col md={24} xl={14}>
        <Text>Work with us</Text>
        <Description style={{ marginTop: "18px", marginBottom: "24px" }}>
          Want to work with us? Check out our organizations and volunteers page
          for more info.
        </Description>
        <PrimaryButton>Organizations</PrimaryButton>
        <SecondaryButton>Volunteers</SecondaryButton>
      </Col>
    </BannerStyles>
    <FormContainer>
      <Col md={24} xl={14}>
        <Text>Contact Us</Text>
        <Description style={{ marginTop: "18px" }}>
          Got a question, need help with a problem, or just want to leave
          feedback? Leave us your contact info and we will get back to you.
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
        <Form layout="vertical">
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
          <Form.Item
            name="message"
            label={<Label>Message</Label>}
            rules={[rules]}
          >
            <TextArea placeholder="Your message" />
          </Form.Item>

          <PrimaryButton htmlType="submit">Submit</PrimaryButton>
        </Form>
      </Col>
    </FormContainer>
  </Layout>
);

export default SecondPage;
