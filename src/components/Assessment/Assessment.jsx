import React from "react";
import { useState } from "react";
import questions from "../../Data";
import QuestionCard from "../QuestionCard/QuestionCard";
import Submit from "../Submit/Submit";
import FinalResult from "../Result/FinalResult";
import "./Assessment.css";

function Assessment({ testCategory }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [active, setActive] = useState("");
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const [showSubmit, setShowSubmit] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const filteredQuestions = questions.filter(
    (ques) => ques.category === testCategory
  );

  const optionHandler = (isCorrect, id) => {
    setActive(id);
    setIsCorrect(isCorrect);
  };

  function nextQuestion() {
    setActive("");
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < filteredQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSubmit(true);
      setShowQuestions(false);
      setShowResult(false);
    }
  }

  function submitTest() {
    setShowResult(true);
    setShowQuestions(false);
    setShowSubmit(false);
  }

  return (
    <main className="assessment-conainer">
      <div className="header">
        {active !== "" && (
          <button onClick={nextQuestion} className="btn-next">
            Next
          </button>
        )}
      </div>
      <section className="assessment-wrapper">
        {showQuestions && (
          <QuestionCard
            optionHandler={optionHandler}
            questions={filteredQuestions}
            currentQuestion={currentQuestion}
            active={active}
          />
        )}
        {showSubmit && <Submit submitTest={submitTest} />}
        {showResult && (
          <FinalResult
            score={score}
            questionsLength={filteredQuestions.length}
          />
        )}
      </section>
    </main>
  );
}

export default Assessment;
