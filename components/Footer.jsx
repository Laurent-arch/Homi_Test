import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.container} id="contact">
        <div className={styles.left}>
              <div className={styles.logo}>
                  <Image src="/img/logo.png" alt="" width="64" height="64" />
              </div>
              <p className={styles.text}>Find a property for sale</p>
              <p className={styles.text}>Find a property for rent</p>
              <p className={styles.text}>More infos</p>
        </div>
        <div className={styles.middle}>
            <h2>Find us on</h2>
            <div className={styles.social}>
                  <FaFacebook icon="fa-brands fa-facebook" />
                  <p>Facebook</p>
            </div>
            <div className={styles.social}>
                  <FaTwitter icon="fa-brands fa-square-twitter" />
                  <p>Twitter</p>
            </div>
            <div className={styles.social}>
                  <FaInstagram icon="fa-brands fa-instagram" />
                  <p>Instagram</p>
            </div>
            
            
        </div>
        <div className={styles.right}>
            <h2>Contact Us</h2>
            <div className={styles.contact}>
                  <FontAwesomeIcon icon={faLocationDot} className={styles.footerDetails}/>
            <p>123 Athens, Greece</p>
            </div>
            <div className={styles.contact}>
                  <FontAwesomeIcon icon={faPhone} className={styles.footerDetails}/>
            <p>123 456 789</p>
            </div>
            <div className={styles.contact}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.footerDetails}/>
            <p>homitest@email.com</p>
            </div>

        </div>
    </div>
  )
}

export default Footer