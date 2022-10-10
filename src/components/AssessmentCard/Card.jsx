import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ img, path }) {
  return (
    <article className="test-conatiner flex-center">
      <img src={img} alt="" />
      <Link to={path}>
        <button>Start Test</button>
      </Link>
    </article>
  );
}

export default Card;
