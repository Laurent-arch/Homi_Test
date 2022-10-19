import styles from '../../styles/SingleHouse.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMapLocation, faDoorOpen, faHelmetSafety, faPaintRoller, faStairs, faBed, faSink } from '@fortawesome/free-solid-svg-icons'
import houses from '../../util/data.json'

export const getStaticProps = async({params}) => {
  const houseList = houses.filter(el => el.listing_id.toString() === params.id)
  return {
    props: {
      house: houseList[0]
    }
  }
}

export const getStaticPaths = async () => {
  const paths = houses.map(property => ({
    params: { id: property.listing_id.toString()}
  })
    )
    return {paths, fallback: false}
}


const SingleHouse = ({house}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src={house.media} width="500px" height="500px"/>
        <h4 className={styles.price}>Price: {house.price}€{house.list_type === 'rent' ? '/month' : ''}</h4>
        <h1 className={styles.type}>{house.list_type === 'rent' ? 'For rent' : 'For Sale'}</h1>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.details}>
          <FontAwesomeIcon icon={faHouse} className={styles.icons}/>
          <h3>{house.property_subcategory.toUpperCase()}</h3>
          </div>

        <div className={styles.details}>
          <FontAwesomeIcon icon={faMapLocation} className={styles.icons} />
          <h3 className={styles.location}>Area: {house.suburb}</h3>
          </div>
        <div className={styles.details}>
          <FontAwesomeIcon icon={faDoorOpen} className={styles.icons} />
          <h4 className={styles.size}>Surface: {house.size} m2</h4>
          </div>
        <div className={styles.details}>
          <FontAwesomeIcon icon={faHelmetSafety} className={styles.icons} />
          <h4 className={styles.size}>Construction Year: {house.construction_year}</h4>
          </div>
        <div className={styles.details}>
          <FontAwesomeIcon icon={faPaintRoller} className={styles.icons} />
          <h4 className={styles.size}>Renovation Year: {house.renovation_year}</h4>
          </div>
        <div className={styles.details}>
          <FontAwesomeIcon icon={faStairs} className={styles.icons} />
          <h4 className={styles.size}>{house.floor}</h4>
          </div>
        <div className={styles.details}>
          <FontAwesomeIcon icon={faBed} className={styles.icons} />
          <h4 className={styles.size}>Bedrooms: {house.bedrooms}</h4>
          </div>
        <div className={styles.details}>
          <FontAwesomeIcon icon={faSink} className={styles.icons} />
          <h4 className={styles.size}>Bathrooms: {house.bathrooms}</h4>
          </div>
        </div>
    </div>
  )
}


export default SingleHouse
        
        
     

        