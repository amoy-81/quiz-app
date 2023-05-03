import React from 'react'

// Styles
import styles from "../../styles/Header.module.css";

// Context 
import { ContextData } from '../../context/Context.Provider'; 
import { useContext } from 'react';
export default function Header() {
  const {data} = useContext(ContextData);
  
  return (
    <header className={styles.header}>
        <h2>کوییز اَپ</h2>
    </header>
  )
}
