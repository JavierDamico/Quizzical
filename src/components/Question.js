import React from "react";

export default function Question(props) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  let allAnswers = [props.correctAnswer, ...props.incorrectAnswers];
  shuffle(allAnswers);

  const displayAnswers = allAnswers.map((answer) => {
    return <span>{htmlDecode(answer)}</span>;
  });

  //this function parses text to convert HTML character references
  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  return (
    <div className="question">
      <h2>{htmlDecode(props.question)}</h2>
      {displayAnswers}
      <hr />
    </div>
  );
}
