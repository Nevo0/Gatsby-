import React from "react";
import { graphql } from "gatsby";

import BackgroundSection from "../components/Globals/BackgroundSection";
import Layout from "../components/layout";
import Info from "../components/Home/Info";

import SEO from "../components/seo";

const AboutPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={"About us"}
        styleClass="about-background"
      />
      <Info />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
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

export default AboutPage;
