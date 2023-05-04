import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextData } from '../context/Context.Provider'
import QuizBox from './QuizBox';

export default function Quizs() {
  const {data , dispatch} = useContext(ContextData);
  const [qNum , setQNum] = useState(3);
    return (
    <div style={{display:"flex" , justifyContent: "center" , alignItems : "center" , padding : "20px"}} >
        <QuizBox data={data.quizs[qNum]}/>
    </div>
  )
}
