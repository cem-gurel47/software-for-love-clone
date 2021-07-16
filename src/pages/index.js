import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  </Layout>
);

export default IndexPage;
