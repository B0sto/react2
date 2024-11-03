import React from "react";
import CubeImage from "../public/rect.png";
import Shape from "../public/shape.svg"
import Time from "../public/Clock.svg"
import Avatar from "../public/avatar.svg"
import "./App.css";
const App = () => {
  const Author = (
    <div className="author">
      <img src={Avatar} alt="avatar" />
      <p>Creation of <span>Jules Wyvern</span></p>
    </div>
  )
  const price = (
    <div className="price">

      <div className="crypto">
        <img src={Shape} alt="Shape"/>
        <p>0.041 ETH</p>
      </div>

      <div className="time">
        <img src={Time} alt="Time" />
        <p>3 days left</p>
      </div>


    </div>
  )
  
  const card = (
    <div className="card">
      <img src={CubeImage} alt="Cube" className="image" />
      <h3>Equilibrium #3429</h3>
      <p className="desc">Our Equilibrium collection promotes balance and calm. </p>
      {price}
      <div className="line"></div>
      {Author}
    </div>
  );

  return <div className="container">
    {card}
  </div>;
};

export default App;
