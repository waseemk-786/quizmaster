import React, { useState } from 'react'
import { QuizDataReact } from '../Data/QuizDataReact'
import QuizResult from './QuizResults.js';

function ReactJsQuiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizDataReact.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizDataReact[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <p className="heading-txt">ReactJS Quiz APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizDataReact.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizDataReact[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizDataReact[currentQuestion].options.map((option,i)=>{
                    return(
                        <button
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default ReactJsQuiz