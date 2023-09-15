import styles from "../../styles/SingleHouse.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMapLocation,
  faDoorOpen,
  faHelmetSafety,
  faPaintRoller,
  faStairs,
  faBed,
  faSink,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import houses from "../../util/data.json";
import { useState } from "react";

export const getStaticProps = async ({ params }) => {
  const houseList = houses.filter(
    (el) => el.listing_id.toString() === params.id
  );
  return {
    props: {
      house: houseList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = houses.map((property) => ({
    params: { id: property.listing_id.toString() },
  }));
  return { paths, fallback: false };
};

const SingleHouse = ({ house }) => {
  const [bookView, setBookView] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookView(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={house.media} width="500px" height="500px" alt="house" />
          <h4 className={styles.price}>
            Price: {house.price}€{house.list_type === "rent" ? "/month" : ""}
          </h4>
          <h1 className={styles.type}>
            {house.list_type === "rent" ? "For rent" : "For Sale"}
          </h1>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infosOne}>
            <div className={styles.details}>
              <FontAwesomeIcon icon={faHouse} className={styles.icons} />
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
              <h4 className={styles.size}>
                Construction Year: {house.construction_year}
              </h4>
            </div>
            <button
              className={styles.tourButton}
              onClick={() => setBookView(true)}
            >
              Book A Viewing
            </button>
          </div>
          <div className={styles.infosTwo}>
            <div className={styles.details}>
              <FontAwesomeIcon icon={faPaintRoller} className={styles.icons} />
              <h4 className={styles.size}>
                Renovation Year: {house.renovation_year}
              </h4>
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
        {bookView && (
          <div className={styles.modal}>
            <div className={styles.formBlock}>
              <button
                className={styles.closeButton}
                onClick={() => setBookView(false)}
              >
                <FontAwesomeIcon icon={faRectangleXmark} />
              </button>

              <form className={styles.form}>
                <label>Name</label>
                <input className={styles.input} type="text" name="name" />
                <label>Surname</label>
                <input className={styles.input} type="text" name="surname" />
                <label>Choose a date</label>
                <input
                  className={styles.input}
                  type="date"
                  name="date"
                  value=""
                />
                <button
                  className={styles.submitButton}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleHouse;
