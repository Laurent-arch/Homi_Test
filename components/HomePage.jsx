import Link from "next/link"
import styles from '../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>FIND YOUR <br/> DREAM PROPERTY <br/> NOW</h1>
        <Link href='/houses' passHref>
              <button className={styles.button}>Explore Houses</button>
        </Link>
      
    </div>
  )
}

export default HomePage