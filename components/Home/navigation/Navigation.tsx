import React, {useEffect, useRef, useState} from "react";
import Image from "next/image"
import styles from "./navigatioin.module.scss"
import {GiHamburgerMenu} from "react-icons/Gi";
import {gsap} from "gsap";

interface props {
}

const Navigation = (props: props) => {

    const [openMenu, setOpenMenu] = useState<boolean>(true)
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (openMenu) {
            gsap.to(boxRef.current, {translateX: "100%", width: "0"})
        } else {
            gsap.to(boxRef.current, {translateX: "50%", width: "100%"})
        }
    }, [openMenu])

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
            <div ref={boxRef} className={styles.verticalMenu}>
                <button className={styles.closedMenu}
                        style={openMenu ? {
                            color: "white",
                            fontSize: "1.5rem",
                            fontFamily: "arial",
                            zIndex: "10"
                        } : {transform: "translateX(500%)"}}
                        onClick={() => {
                            setOpenMenu(!openMenu)
                        }}>X
                </button>
                <div className={styles.menu}>
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