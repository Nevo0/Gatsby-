import React from "react";
import { Link } from "gatsby";
import { FaGulp } from "react-icons/fa";
import Layout from "../components/layout";

import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <h3>
      Lets go for a <FaGulp />
    </h3>
  </Layout>
);

export default IndexPage;
