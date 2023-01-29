
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <div className="landing-container">
        <h1 className="landing-title text">Quizzical</h1>
        <p className="landing-description text">Test your knowledge! Anwser these random assortment of questions from our friends at <strong>Open Trivia Database</strong>. Do it to impress your friends, yourself, and most of all to gain the respect of your cat!</p>
        <button className="landing-button button-submit">Start Quiz</button>
      </div>
      
      <div className="quiz-container hidden">
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

        <div className="quiz-question-container">
          <p className="quiz-question">How would one say goodbye in Spanish?</p>
          <div className="quiz-answers-container">
            <button className="quiz-answer">Answer1</button>
            <button className="quiz-answer">Answer2</button>
            <button className="quiz-answer">Answer3</button>
            <button className="quiz-answer">Even Longer Ass Answer than that</button>
          </div>
          <hr></hr>
        </div>

        <div className="quiz-question-container">
          <p className="quiz-question">How would one say goodbye in Spanish?</p>
          <div className="quiz-answers-container">
            <button className="quiz-answer">Answer1</button>
            <button className="quiz-answer">Answer2</button>
            <button className="quiz-answer">Answer3</button>
            <button className="quiz-answer">This is the longes answer I dare write out loud</button>
          </div>
          <hr></hr>
        </div>

        <div className="quiz-question-container">
          <p className="quiz-question">How would one say goodbye in Spanish?</p>
          <div className="quiz-answers-container">
            <button className="quiz-answer">Answer1</button>
            <button className="quiz-answer">Answer2</button>
            <button className="quiz-answer">Answer3</button>
            <button className="quiz-answer">LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</button>
          </div>
          <hr></hr>
        </div>

        <div className="quiz-question-container">
          <p className="quiz-question">How would one say goodbye in Spanish?</p>
          <div className="quiz-answers-container">
            <button className="quiz-answer">Answer1</button>
            <button className="quiz-answer">Answer2</button>
            <button className="quiz-answer">Answer3</button>
            <button className="quiz-answer">Answer4</button>
          </div>
          <hr></hr>
        </div>

        <div className="quiz-results-submit-container">
          <p className="quiz-results">Your scored 0/5 correctly!</p>
          <button className="quiz-submit button-submit">Submit Answers</button>
        </div>
        

      </div>
      
    </div>
  );
}


