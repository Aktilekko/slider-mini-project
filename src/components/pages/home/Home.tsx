import React from "react";
import "./home.scss";

import Helmet from "../../helmet/Helmet";
import Slider from "../../slider/Slider";

const Home = () => {
  return (
    <Helmet title={"Home"}>
      <div>
        <Slider />
      </div>
    </Helmet>
  );
};

export default Home;
