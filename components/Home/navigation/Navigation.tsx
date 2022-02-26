import React from "react";
import styles from "./navigatioin.module.scss"
import {GiHamburgerMenu} from "react-icons/Gi";

interface props {

}

const Navigation = (props: props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>+</div>
            <GiHamburgerMenu style={{color: "white", fontSize: "2rem", margin: "10%"}}/>
        </div>
    )
}

export default Navigation