
import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import Landing from './components/Landing.jsx';
import Quiz from './components/Quiz.jsx';


export default function App() {
  let [landing,setLanding]= React.useState(true);

  let [quizResults,setQuizResults] = React.useState({
    grading:false,
    totalQuestions:0,
    correctResponses:0,
  })

  let [rawData,setRawData] =React.useState([])

  //to replace characters in questions
  function removeCharacters(question) {
    return question.replace(/(&quot\;)/g, "\"").replace(/(&rsquo\;)/g, "\"").replace(/(&#039\;)/g, "\'").replace(/(&amp\;)/g, "\"").replace(/(&ouml;)/g, "\o");
  }

  //change the status to switch between pages 
  function handlerSwitchPage() {
    setLanding(false);
  }

  //fetch and process data
  function getData() {
    fetch('https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => setRawData(data.results.map(item=>{
            return {
              id: nanoid(),
              question: removeCharacters(item.question),
              correctAnswer: removeCharacters(item.correct_answer),
              allAnswers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5).map(word => removeCharacters(word)),
              answeredRight:false,
              answerStatus:['unselected','unselected','unselected','unselected']
            }
      })))
  }

  //on load, get data 
  React.useEffect(()=>(
    getData()
  ),[])


  function handlerGradeQuiz() {
    setQuizResults(prevState => ({...prevState,grading: !prevState.grading}))

    rawData.map(item => (
      setQuizResults(prevState=>(
        {...prevState,
          totalQuestions:prevState.totalQuestions+1,
          correctResponses:item.answeredRight? prevState.correctResponses+1 :prevState.correctResponses
        }))))

    setRawData(prevRawData => prevRawData.map((item) => (
        {...item,
          answerStatus:item.answerStatus.map((status,index)=>(
            (item.correctAnswer===item.allAnswers[index])?"correct":((status==="selected")?"incorrect":"unselected")
            ))
        }
    )))
  }


  function handlerNewQuiz() {
    setQuizResults(prevState => ({...prevState,grading: !prevState.grading}));
    getData();
  }


  //when answer selected update state if answer is true and to specify what button is selected
  function handlerAnswerSelected(id,selected,index) {
    setRawData(prevRawData => prevRawData.map((item) => (
        {...item,
          answeredRight: (id===item.id && selected===item.correctAnswer)? true : item.answeredRight,
          answerStatus:item.answerStatus.map((status,index2) => (id===item.id)?((index===index2)?"selected":"unselected"):status)
        }
      )
      )
      )
  }

  return (
    <div className="app-container">

      {(landing===true)?
        <Landing 
          handlerSwitchPage={handlerSwitchPage}/>
          :""}
      
      {(landing===false)?
        <Quiz 
          rawData={rawData}
          quizResults={quizResults}
          handlerAnswerSelected={handlerAnswerSelected}
          handlerGradeQuiz={handlerGradeQuiz}
          handlerNewQuiz={handlerNewQuiz}/>
          :""}
      
    </div>
  );
}


