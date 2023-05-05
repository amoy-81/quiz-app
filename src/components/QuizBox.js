import React , { useEffect, useState } from 'react'
// Styles
import styles from "../styles/QuizBox.module.css";

import Loader from "../components/Shared/Loader"
import { Link } from 'react-router-dom';

// Sounds
import { touch } from '../sounds/sounds';

export default function QuizBox ({data , changeQuiz , joon , decriseJoon , upScore , score}) {
  const [click , setClick] = useState("DEFAULT"); 
  const [unic , setUnic] = useState("")
  const [loading , setLoading] = useState(false);
  const [endTime , setEndTime] = useState(false); 
  const [timer , setTimer] = useState(10); 

  useEffect(() => {
    
      setInterval(() => {
        if (timer > 0) {
          setTimer(prev => (prev - 1))
        }
      },1000)
  
  },[])
  const clickHandler = (val , id) => {
    touch();
    if (click === "DEFAULT" && score >= 0) {
      if (val) {
        setClick("GREEN")
        setLoading(true)
        
        setTimeout(() => {
          changeQuiz()
          upScore()
          setClick("DEFAULT")
          setLoading(false)
          setEndTime(false)
          setTimer(timer > 3 ? (timer < 13 ? (prev => (prev + 10)) : (20)) : (10))
        } , 3000)
  
      } else {
        setClick("RED")
        setLoading(true)
        decriseJoon()
        setUnic(id)
        if (id === "") {
          setEndTime(true)
        }
        setTimeout(() => {
          changeQuiz()
          setClick("DEFAULT")
          setLoading(false)
          setUnic("")
          setEndTime(false)
          setTimer(10)
        } , 3000)
      }
    }
  }
 if (timer < 1 && timer > -1) {
    clickHandler(false , "")
  } 
  if (score >= 10) {
    return (
      
      <div className={styles.container}>
        <h3>آفرییین برنده شدید!</h3>
        <Link to='/' onClick={() => touch()}>بازگشت</Link>
      </div>
    )
  }
  if (joon <= 0) {
    return (
      <div className={styles.container}>
        <h3>باختید!</h3>
        <p style={{marginTop : "0" , fontSize: "20px" , fontWeight: "bold"}}>{score}</p>
        <Link to='/' onClick={() => touch()}>بازگشت</Link>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.quizHead} id={endTime ? styles.endTime : ""}>
        <h3>{data.quiz}</h3>
      </div>
      <div className={styles.answersBox}>
        {
          data.answers.map(answer => <p key={answer.id} onClick={() => clickHandler(answer.val , answer.id)} className={(click === "GREEN" && answer.val ? styles.green : "") ||(click === "RED" && !answer.val && answer.id === unic ? styles.red : "") ||(click === "RED" && answer.val ? styles.green : "") }>{answer.text}</p>)
        }
      </div>
      <div className={styles.timer}>
        <span>{`00:${timer}`}</span>
      </div>
      <div className={styles.loading}>
        {
          loading && <Loader />
        }
      </div>
    </div>
  )
}
