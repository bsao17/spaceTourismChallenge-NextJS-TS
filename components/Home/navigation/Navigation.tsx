import React, {useEffect, useRef, useState} from "react";
import Image from "next/image"
import styles from "./navigation.module.scss"
import {GiHamburgerMenu} from "react-icons/Gi";
import {gsap} from "gsap";
import {AiOutlineClose} from "react-icons/Ai"

interface props {
}

const Navigation = (props: props) => {

    const [openMenu, setOpenMenu] = useState<boolean>(true)
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (openMenu) {
            gsap.to(boxRef.current, {translateX: "100%", width: "0"})
        } else {
            gsap.to(boxRef.current, {translateX: "30%", width: "100%"})
        }
    }, [openMenu])

    return (
        <div className={styles.container}>

            {/* Top sidebar navigation */}
            <div className={styles.topSidebar}>
                <Image src={"/assets/logo.png"} className={styles.logo} width={40} height={40} alt="logo"/>
                <button className={styles.hamburgerButton} id={"hamburgerButton"} onClick={() => {
                    setOpenMenu(!openMenu)
                }} style={{color: "white", fontSize: "2rem", margin: "5%"}}>
                    <div className={styles.hamburgerLine}/>
                    <div className={styles.hamburgerLine}/>
                    <div className={styles.hamburgerLine}/>
                </button>
            </div>

            {/* Vertical navigation menu */}
            <nav ref={boxRef} className={styles.verticalMenuWrapper}>

                <button className={styles.closedMenu}
                        onClick={() => {
                            setOpenMenu(!openMenu)
                        }}><AiOutlineClose/>
                </button>
                <ul className={styles.links_wrapper}>
                    <li className={styles.link}>
                        <span className={styles.linkNumber}>00</span>
                        <a>HOME</a>
                    </li>
                    <li className={styles.link}>
                        <span className={styles.linkNumber}>01</span>
                        <a>DESTINATION</a>
                    </li>
                    <li className={styles.link}>
                        <span className={styles.linkNumber}>02</span>
                        <a>CREW</a>
                    </li>
                    <li className={styles.link}>
                        <span className={styles.linkNumber}>03</span>
                        <a>TECHNOLOGY</a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navigation