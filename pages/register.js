import {React, useState} from 'react'
import styles from '../styles/Register.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'


const Register = () => {
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/api/register", {
                firstname,
                lastname,
                email,
                password,
            });
            router.push("/");
        } catch (err) {
            setError(true);
            console.log(err);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <h1 className={styles.title}>Register</h1>
                <label htmlFor="">First Name</label>
                <input type="text" className={styles.input} onChange={(e) => setFirstname(e.target.value)} />
                <label htmlFor="">Last Name</label>
                <input type="text" className={styles.input} onChange={(e) => setLastname(e.target.value)} />
                <label htmlFor="">Email</label>
                <input type="text" className={styles.input} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input type="text" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
                {/* <label htmlFor="">Confirm Password</label>
                <input type="text" className={styles.input} /> */}
                <button onClick={handleClick} className={styles.submitButton} type="submit" >Register</button>
                {error && <span>Wrong credentials</span>}
                
            </form>
        </div>
    )
}


export default Register