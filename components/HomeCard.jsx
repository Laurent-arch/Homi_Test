import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/HomeCard.module.css'

const HomeCard = ({houses}) => {

  return (
      
      <div className={styles.container}>
        <p className={styles.type}>{houses.list_type === 'rent' ? 'For Rent' : "For Sale"}</p>
          <Image src={houses.media} alt="" width='300px' height='300px'/>
          <h3 className={styles.location}>Area: {houses.suburb}</h3>
          <h4 className={styles.size}>Surface: {houses.size} m2</h4>
          <h4 className={styles.price}>Price: {houses.price}€{houses.list_type === 'rent' ? '/month' : ''}</h4>
      <Link href={`/houses/${houses.listing_id}`} passHref>
          <button className={styles.button}>See more details</button>
      </Link>
    </div>
   
  )
}

export default HomeCard