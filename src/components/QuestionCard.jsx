import React from "react";
import "./QuestionCard.css";

function QuestionCard() {
  return (
    <article className="question-card flex-center">
      <div className="quesiton-container flex-center">
        <h3>What is 2x2?</h3>
      </div>
      <div className="options-container flex-center">
        <h4 className="options-heading">Select only one</h4>
        <ul className="options-list">
          <li className="option">2</li>
          <li className="option">4</li>
          <li className="option">5</li>
          <li className="option">10</li>
        </ul>
      </div>
    </article>
  );
}

export default QuestionCard;
