import React from "react";
import styles from "./navigatioin.module.scss"
import {AiOutlineMenu} from "react-icons/all";

interface props {

}

export default function Navigation(props: props){
    return (
        <div className={styles.container}>
            <div className={styles.logo}></div>
            <AiOutlineMenu style={{color: "white", fontSize: "2rem", margin: "10%"}}/>

        </div>
    )
}