import React from "react";

export default function Question(props) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  let allAnswers = [props.correctAnswer, ...props.incorrectAnswers];
  shuffle(allAnswers);
  // console.log(allAnswers);
  const displayAnswers = allAnswers.map((answer) => {
    return <span>{answer}</span>;
  });

  return (
    <div className="question">
      <h2>{props.question}</h2>
      {displayAnswers}
      <hr />
    </div>
  );
}
