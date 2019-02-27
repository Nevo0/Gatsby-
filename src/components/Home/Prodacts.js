import React from "react";
import Prodact from "./Prodact";
import Title from "../Globals/Title";
import { StaticQuery, graphql } from "gatsby";

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxWidth: 426, maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function Prodacts() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        // console.log(data);

        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  //   console.log(product);
                  return <Prodact key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
