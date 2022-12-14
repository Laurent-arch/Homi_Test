import Head from 'next/head'
import houses from '../../util/data.json'
import HomeCard from '../../components/HomeCard'
import styles from '../../styles/HomeList.module.css'
import { useState } from 'react'

export const getStaticProps = async () => {
    return {
        props: {
            houseList: houses
        }
    }
}


export default function Home ({ houseList }) {
    const [list, setList] = useState(houseList);

    const rentalFilter = () => {
        const filteredList = houseList.filter(el => el.list_type !== 'sale')
        setList(filteredList)
    }
    const salesFilter = () => {
        const filteredList = houseList.filter(el => el.list_type !== 'rent')
        setList(filteredList)
    }
    const allProperties = () => {
        setList(houseList) 
    }

    return (
        <div>
            <Head>
                <title>Homi Test App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="img/logo.png" />
            </Head>          
                <h1 className={styles.featured}>FEATURED PROPERTIES</h1>
                <hr className={styles.underline} />
                <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={allProperties}>All Properties</button>
                    <button className={styles.button} onClick={salesFilter}>For Sale</button>
                    <button className={styles.button} onClick={rentalFilter}>For Rent</button>
                </div>
             
                <div className={styles.container}>
                    {list.map((house) => {
                        return <HomeCard key={house.listing_id} houses={house} />
                    })}
                </div>
        </div>
    )
}


