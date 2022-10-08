import React from "react";
import "./Card.css";

function Card({ img }) {
  return (
    <article className="test-conatiner flex-center">
      <img src={img} alt="" />
      <button>Start Test</button>
    </article>
  );
}

export default Card;
