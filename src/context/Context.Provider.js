import React from 'react'
import { useReducer } from 'react'
import quizs from '../assets/QuizsFile';

export const ContextData = React.createContext();
const inishialize = {
    quizs : quizs,
    joon : 3,
}
const reducer = (state , active) => {
    switch(active.type) {
        case "DECREASE_JOON" :
            state.joon -= 1
            return state;
        default :
            return state;
    }
}
export default function ContextProvider({children}) {

    const [data , dispatch] = useReducer(reducer , inishialize);
  return (
    <ContextData.Provider value={{data , dispatch}}>
        {children}
    </ContextData.Provider>
  )
}
