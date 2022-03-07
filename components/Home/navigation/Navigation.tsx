import React, {useState} from "react";
import Image from "next/image"
import styles from "./navigatioin.module.scss"
import {GiHamburgerMenu} from "react-icons/Gi";

interface props {
}

const hiddenMenu: Object = {width: "0"}
const visibleMenu: Object = {width: "50%"}

const Navigation = (props: props) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            {/* Top sidebar navigation */}
            <div className={styles.sidebar}>
                <Image src={"/assets/logo.png"} className={styles.logo} width={40} height={40} alt="logo"/>
                <GiHamburgerMenu onClick={() => {
                    setOpenMenu(!openMenu)
                }} style={{color: "white", fontSize: "2rem", margin: "5%"}}/>
            </div>
            {/* Vertical navigation menu */}
            <div className={styles.verticalMenu} style={openMenu ? visibleMenu : hiddenMenu}>
                <button className={styles.closedMenu}
                        style={openMenu ? {
                            transform: "translateX(-100%)",
                            color: "white",
                            fontSize: "1.5rem",
                            fontFamily: "arial",
                            zIndex: "10"
                        } : {transform: "translateX(500%)"}}
                        onClick={() => {
                            setOpenMenu(false)
                        }}>X
                </button>
                <div className={styles.menu}
                     style={openMenu ? {transform: "translateX(0)"} : {transform: "translateX(500%)"}}>
                    <ul className={styles.links}>
                        <li><a>Destination</a></li>
                        <li><a href="">Crew</a></li>
                        <li><a href="">Technology</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation