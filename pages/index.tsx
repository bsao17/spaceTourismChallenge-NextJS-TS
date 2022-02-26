import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import Navigation from "../components/Home/navigation/Navigation";

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <div id={styles.navigation}>
                <Navigation/>
            </div>
        </div>
    )
}

export default Home
