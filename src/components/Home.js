import React from 'react'
import { Link } from 'react-router-dom'

// Style 
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h3>چند تا سوال جواب میدی ؟</h3>
        <Link to="/quizs">شروع</Link>
      </main>
    </div>
  )
}
