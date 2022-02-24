import React from "react";
import { useState, useEffect } from "react";
import Question from "./Question";

export default function Game() {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=12&type=multiple", {
      "Content-type": "text/html; charset=utf-8",
    })
      .then((res) => res.json())
      .then((data) => setAllQuestions(data.results));
  }, []);

  // console.log(allQuestions);

  const question = allQuestions.map((item) => {
    return (
      <Question
        question={item.question}
        correctAnswer={item.correct_answer}
        incorrectAnswers={item.incorrect_answers}
      />
    );
  });

  return (
    <div className="questions--container">
      {question}
      <button>Check answers</button>
    </div>
  );
}
