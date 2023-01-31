import React from 'react';


export default function QuizQuestion() {


  return(
    <div className="quiz-question-container">
      <p className="quiz-question">How would one say goodbye in Spanish?</p>
      <div className="quiz-answers-container">
        <button className="quiz-answer">Answer1</button>
        <button className="quiz-answer">Answer2</button>
        <button className="quiz-answer">Answer3</button>
        <button className="quiz-answer">Long ass answer</button>
      </div>
      <hr></hr>
    </div>
  )
}