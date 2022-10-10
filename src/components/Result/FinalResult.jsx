import React from "react";
import "./FinalResult.css";
import { Link } from "react-router-dom";

function FinalResult({ score, questionsLength }) {
  return (
    <article className="flex-center container-center">
      <div className="finalResult-wrapper flex-center">
        <h1 className="result-heading">Final Result</h1>
        <h3>
          {score} Out of {questionsLength} correct - (
          {(score / questionsLength) * 100}%)
        </h3>
        <Link to={"/"}>
          <button>Return to Test</button>
        </Link>
      </div>
    </article>
  );
}

export default FinalResult;
