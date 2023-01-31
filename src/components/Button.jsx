import React from 'react';

export default function Button(props) {
  
  return(
    <button 
      className={`quiz-answer ${props.status}`}
      onClick={()=>{props.handlerAnswerSelected(props.id, props.answer,props.index)
      }}
    >{props.answer}</button>
  )
}

