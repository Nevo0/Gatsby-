import React, { Component } from "react";
import Title from "../Globals/Title";
import Img from "gatsby-image";

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ["all", ...categories];
  return categories;
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      categories: getCategories(props.items.edges)
    };
  }

  componentWillMount() {
    const tabx2 = this.props.items.edges.concat(
      this.props.items.edges,
      this.props.items.edges,
      this.props.items.edges
    );
    this.setState({
      items: this.props.items.edges,
      coffeeItems: tabx2,
      coffeeItems2: tabx2
    });
  }

  handleCategory = catogory => {
    let tempItems = [...this.state.coffeeItems2];

    if (catogory === "all") {
      this.setState({
        coffeeItems: tempItems
      });
    } else {
      let items = tempItems.filter(({ node }) => node.category === catogory);
      this.setState({
        coffeeItems: items
      });
    }
  };

  render() {
    // console.log(this.state.coffeeItems2);
    // console.log(this.props.items.edges);

    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best od our menu" />

            {/* categories */}

            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((catogory, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow m-3"
                      onClick={() => this.handleCategory(catogory)}
                    >
                      {catogory} class
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }, id) => {
                return (
                  <div
                    key={id}
                    className="col-11 col-md-6  my-3  d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>

                    {/* item text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-0">
                          <small>{node.title}</small>
                        </h5>
                        <h5 className="mb-0 text-yellow">
                          <small>$:{node.price}</small>
                        </h5>
                      </div>
                      <p className="text-muted">
                        {node.desxription.desxription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best od our menu" />
            <div className="row">
              <div className="clo-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>ther are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
