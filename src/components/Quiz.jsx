import React from 'react';
import QuizQuestion from './QuizQuestion.jsx';

export default function Quiz(props) {

  let questionElements = props.rawData.map(item => {
    return <QuizQuestion 
              key={item.id}
              id={item.id}
              question={item.question}
              answers={item.allAnswers}
              answersStatus={item.answerStatus}
              handlerAnswerSelected={props.handlerAnswerSelected}
              />
  })
  return (
    <div className="quiz-container">

        {questionElements}

        { props.quizResults.grading ?
        <div className="quiz-results-submit-container">
          <p>{`Your score is ${props.quizResults.correctResponses} out of ${props.quizResults.totalQuestions}.`}</p>
          <button 
          className="quiz-submit button-submit button"
          onClick={props.handlerNewQuiz}
          >New Quiz</button>
        </div>
        :
        <div className="quiz-results-submit-container">
          <button 
            className="quiz-submit button-submit button"
            onClick={props.handlerGradeQuiz}
            >Submit Answers</button>
        </div>}

    </div>
  )
}