import React from "react";
import Title from "../Globals/Title";
import { Link } from "@reach/router";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              magnam cumque similique maiores fuga iusto voluptatum totam dicta
              deserunt ab impedit, iure ex libero delectus eius in! Ullam,
              consequatur iste. Assumenda numquam sapiente, eos cumque mollitia
              ipsa explicabo corporis, dolores provident earum cum blanditiis
              esse magni temporibus sed ab a voluptatibus, quia expedita eum
              eveniet quaerat tenetur!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
