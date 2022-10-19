import Image from "next/image"
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
      <div className={styles.container}>
          <div className={styles.item}>
              <div className={styles.logo}>
                  <Image src="/img/logo.png" alt="" width="64" height="64"/>
              </div>
          </div>
          <div className={styles.item}>
              <ul className={styles.list}>
                  <Link href='/'>
                      <li className={styles.listItem}>Homepage</li>
                  </Link>
                  <Link href='/houses'>
                  <li className={styles.listItem}>Houses</li>
                  </Link>
                  <Link href='#contact'>
                  <li className={styles.listItem}>Contact</li>
                  </Link>
              </ul>
          </div>
              <div className={styles.item}>
                  <p>Login / Register</p>
              </div>
      </div>
  )
}

export default Navbar