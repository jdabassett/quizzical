
import './App.css';
import React from 'react';
// import { nanoid } from 'nanoid';
import Data from './Data.jsx';
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


  function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  // function processData() {
  //   setProcessedData(rawData.map(obj => {
  //     return {
  //       question: obj.question,
  //       correctAnswer: obj.correct_answer,
  //       allAnswers: shuffleArray([...obj.incorrect_answers, obj.correct_answer])
  //     }
  //   }))
  // }


  //change the status to switch between pages 
  function handlerSwitchPage() {
    setLanding(false);
  }

  function handlerGradeQuiz() {
    console.log(quizResults.grading)
    setQuizResults(prevState => ({...prevState,grading: !prevState.grading}))
  }

  function handlerNewQuiz() {
    console.log(quizResults.grading)
    setQuizResults(prevState => ({...prevState,grading: !prevState.grading}))
    
  }

  //fetch and process data
  function getData() {
    fetch('https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => setRawData(data.results.map(item=>{
            return {
              question: item.question,
              correctAnswer: item.correct_answer,
              allAnswers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5)
            }
      })))
  }

  React.useEffect(()=>(
    getData()
  ),[])
  
  console.log(rawData);

  return (
    <div className="app-container">

      {(landing===true)?
        <Landing 
          handlerSwitchPage={handlerSwitchPage}/>
          :""}
      
      {(landing===false)?
        <Quiz 
          quizResults={quizResults}
          handlerGradeQuiz={handlerGradeQuiz}
          handlerNewQuiz={handlerNewQuiz}/>
          :""}
      
    </div>
  );
}


