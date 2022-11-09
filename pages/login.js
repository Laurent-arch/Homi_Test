import {React, useState} from 'react'
import styles from '../styles/Login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <h1 className={styles.title}>Sign in</h1>
        <label htmlFor="">Email</label>
        <input type="text" className={styles.input}/>
        <label htmlFor="">Password</label>
        <input type="text" className={styles.input} />
        <button className={styles.submitButton} type="submit" >Sign in</button>
      </form>
    </div>
  )
}

export default Login