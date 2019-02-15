import React from "react";
import { Link, graphql } from "gatsby";

import BackgroundSection from "../components/Globals/BackgroundSection";
import Layout from "../components/layout";

import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={"Hello there"}
        styleClass="default-background"
      />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "default-background.jpeg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
