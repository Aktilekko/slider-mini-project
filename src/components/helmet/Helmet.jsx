import React from "react";

const Helmet = (props) => {
  document.title = "kairo -" + props.title;
  return <div>{props.children}</div>;
};

export default Helmet;
