import React from "react";
import Button from "./Button.jsx"

export default function QuizQuestion(props) {

  let buttonArray = props.answers.map((answer,index) => {
    return(<Button 
      key={answer}
      id={props.id}
      answer={answer}
      index={index}
      status={props.answersStatus[index]}
      handlerAnswerSelected={props.handlerAnswerSelected}
    />)
  })

  return (
    <div className="quiz-question-container">
      <p className="quiz-question">{props.question}</p>
      <div className="quiz-answers-container">
 
        {buttonArray}

      </div>
      <hr></hr>
    </div>
  );
}
