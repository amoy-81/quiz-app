import React , { useContext, useState } from 'react'

// Styles
import styles from "../styles/QuizBox.module.css";

export default function ({data}) {
  const [click , setClick] = useState("default");
  const clickHandler = (event) => {
    if (event) {
      setClick("GREEN")
    } else {
      setClick("RED")
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.quizHead}>
        <h3>{data.quiz}</h3>
      </div>
      <div className={styles.answersBox}>
        {
          data.answers.map(answer => <p key={answer.id} onClick={() => clickHandler(answer.val)} className={click === "GREEN" && answer.val ? styles.green : "" ||click === "RED" && !answer.val ? styles.red : "" ||click === "RED" && answer.val ? styles.green : "" }>{answer.text}</p>)
        }
      </div>
      <div >

      </div>
    </div>
  )
}
