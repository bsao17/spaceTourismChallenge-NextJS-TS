import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import Navigation from "../components/Home/navigation/Navigation";
import React from "react";

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <div id={styles.navigation}>
                <Navigation/>

                {/* body */}
                <div className={styles.body}>
                    <section className={styles.bodyText}>
                        <p id={styles.introduction}>So, you want to travel to</p>
                        <h1 className={styles.spaceTitle}>SPACE</h1>
                        <p id={styles.paragraph}>
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                            hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                            this world experience!
                        </p>
                    </section>
                    <div className={styles.hoverCircle}>
                        <button className={styles.whiteCircle}>
                            <h2 className={styles.textCircle}>Explore</h2>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
