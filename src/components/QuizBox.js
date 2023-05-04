import React , { useState } from 'react'

// Styles
import styles from "../styles/QuizBox.module.css";

import Loader from "../components/Shared/Loader"
import { Link } from 'react-router-dom';

export default function QuizBox ({data , changeQuiz , joon , decriseJoon , upScore , score}) {
  const [click , setClick] = useState("DEFAULT"); 
  const [unic , setUnic] = useState("")
  const [loading , setLoading] = useState(false);
  
  const clickHandler = (val , id) => {
    if (click === "DEFAULT") {
      if (val) {
        setClick("GREEN")
        setLoading(true)
  
        setTimeout(() => {
          changeQuiz()
          upScore()
          setClick("DEFAULT")
          setLoading(false)
        } , 3000)
  
      } else {
        setClick("RED")
        setLoading(true)
        decriseJoon()
        setUnic(id)
        setTimeout(() => {
          changeQuiz()
          setClick("DEFAULT")
          setLoading(false)
          setUnic("")
        } , 3000)
      }
    }
  }
  if (score >= 10) {
    return (
      <div className={styles.container}>
        <h3>آفرییین برنده شدید!</h3>
        <Link to='/'>بازگشت</Link>
      </div>
    )
  }
  if (joon === 0) {
    return (
      <div className={styles.container}>
        <h3>باختید!</h3>
        <p style={{marginTop : "0" , fontSize: "20px" , fontWeight: "bold"}}>{score}</p>
        <Link to='/'>بازگشت</Link>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.quizHead}>
        <h3>{data.quiz}</h3>
      </div>
      <div className={styles.answersBox}>
        {
          data.answers.map(answer => <p key={answer.id} onClick={() => clickHandler(answer.val , answer.id)} className={(click === "GREEN" && answer.val ? styles.green : "") ||(click === "RED" && !answer.val && answer.id === unic ? styles.red : "") ||(click === "RED" && answer.val ? styles.green : "") }>{answer.text}</p>)
        }
      </div>
      <div className={styles.loading}>
        {
          loading && <Loader />
        }
      </div>
    </div>
  )
}
