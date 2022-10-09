import React from "react";
import { useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import FinalResult from "../Result/FinalResult";
import questions from "../../Data";
import "./Assessment.css";

function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const optionHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  return (
    <main className="assessment-conainer">
      <div className="header">
        <button onClick={nextQuestion} className="btn-next">
          Next
        </button>
      </div>
      <section className="assessment-wrapper">
        {showResult ? (
          <FinalResult score={score} questionsLength={questions.length} />
        ) : (
          <QuestionCard
            optionHandler={optionHandler}
            questions={questions}
            currentQuestion={currentQuestion}
          />
        )}
      </section>
    </main>
  );
}

export default Assessment;
