'use client'

import Link from "next/link"
import styles from "@/sass/pages/_MobileMenu.module.scss"
import Image from "next/image"
import close from "@/assets/images/close.svg"

function MobileMenu() {

    // TOGGLE MENU
    const toggleMenu = () => {
        document.querySelector("#mobileMenu").style.right = "-45%"
    }

  return (
    <>
        <div className={styles.mobileMenu} id="mobileMenu">

            {/* CLOSE MENU */}
            <div className={styles.close}>
                <Image onClick={e => toggleMenu(e)} src={close} alt="close-menu" />
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            contact
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link href={"/signup"}>
                            SignUp
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default MobileMenu