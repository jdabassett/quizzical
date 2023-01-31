import React from 'react';

export default function Landing(props) {
  return (
    <div 
      className="landing-container ">
      <h1 className="landing-title text">Quizzical</h1>
      <p className="landing-description text">Test your knowledge! Anwser these random assortment of questions from our friends at <strong>Open Trivia Database</strong>. Do it to impress your friends, yourself, and most of all to gain the respect of your cat!</p>
      <button 
        key="landingButton"
        className="landing-button button-submit button" 
        onClick={props.handlerSwitchPage}
        >Start Quiz</button>
    </div>
  )
}