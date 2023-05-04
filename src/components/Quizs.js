import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextData } from '../context/Context.Provider'
import QuizBox from './QuizBox';

// Icon
import joonIcon from '../assets/hearth.svg'

// Styles 
import styles from "../styles/Quiz.module.css"

export default function Quizs() {
  const {data} = useContext(ContextData);
  const [qNum , setQNum] = useState(0);
  const [joon , setJoon] = useState(2);
  const [score , setScore] = useState(0);
  


  const changeQuiz = () => {
    setQNum(prev => (prev + 1))
  }
  const upScore = () => {
    setScore(prev => (prev + 1))
  }
  const decriseJoon = () => {
    setJoon(prev => (prev - 1))
  }
    return (
    <div  className={styles.container} >

      <div className={styles.detailsBox}>
        <div className={styles.lpac} >
          <img src={joonIcon} alt="joon" />
          <span>{joon}</span>
        </div>
        <div className={styles.rpac} >
          <span>{score}/10</span>
        </div>
      </div>
        <QuizBox upScore={upScore} score={score} joon={joon} decriseJoon={decriseJoon} data={data.quizs[qNum]} changeQuiz={changeQuiz}/>
    </div>
  )
}
