import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import Navigation from "../components/Home/navigation/Navigation";
import React from "react";

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <div id={styles.navigation}>
                <Navigation/>
                <h1 className={styles.spaceTitle} >SPACE</h1>
            </div>
        </div>
    )
}

export default Home
