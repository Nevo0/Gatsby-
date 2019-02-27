import React from "react";
import { graphql } from "gatsby";

import BackgroundSection from "../components/Globals/BackgroundSection";
import Layout from "../components/layout";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
import Prodacts from "../components/Home/Prodacts";

import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={"Hello there"}
        styleClass="default-background"
      />
      <Info />
      <Menu items={data.menu} />
      <Prodacts />
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

    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          desxription {
            desxription
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
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
