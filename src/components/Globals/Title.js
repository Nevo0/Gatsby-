import React from "react";

const Title = ({ title }) => {
  console.log();

  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="display-4 text-capitalize font-weight-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
