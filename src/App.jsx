// import { useState } from 'react'
import styles from './App.module.css';
import Button from './Button.jsx';

function App() {

  return (
    <div>
      <h1>Welcome back!!!</h1>
      <Button className={styles.btn} text="Continue"/>
    </div>
  )
}

export default App
