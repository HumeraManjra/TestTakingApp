import React from "react";
import "./QuestionCard.css";

function QuestionCard({ questions, currentQuestion, optionHandler }) {
  return (
    <article className="container-center">
      <div className="wrapper">
        <div className="question-container">
          <h3 className="question-text">
            {questions[currentQuestion].question}
          </h3>
        </div>
        <div className="options-container flex-center">
          <h4 className="options-heading">Select only one</h4>
          <ul className="options-list">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  className="option"
                  onClick={() => optionHandler(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h4 className="question-counter">
          Question {currentQuestion + 1} out of {questions.length}
        </h4>
      </div>
    </article>
  );
}

export default QuestionCard;
