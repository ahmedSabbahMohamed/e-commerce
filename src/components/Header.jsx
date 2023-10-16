'use client'

import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/Logo.svg"
import search from "@/assets/images/search.svg"
import cart from "@/assets/images/cart.svg"
import wishlist from "@/assets/images/Wishlist.svg"
import menu from "@/assets/images/menu.svg"
import styles from "@/sass/pages/_Header.module.scss"
import Search from "./Search"
import MobileMenu from "./MobileMenu"

function Header() {

    // TOGGLE SEARCH BAR
    const toggleSearchbar = () => {
        let hiddenSearch = document.querySelector("._Search_search__Hfs9A")
        hiddenSearch.classList.toggle("_Search_showSearch__Syxer")
    }

    // TOGGLE MENU
    const toggleMenu = () => {
        let myMenu = document.querySelector("#mobileMenu")
        myMenu.style.right = "0"
    }

  return (
    // START HEADER
    <header className={styles.myHeader}>

        {/* CONTENT */}
        <div className={styles.headerContent}>

            {/* LEFT */}
            <div className={styles.left}>

                {/* LOGO */}
                <div className="logo">
                    <Link href={"/"}>
                        <Image src={ logo } alt="logo" />
                    </Link>
                </div>

                {/* NAV LINKS */}
                <nav>
                    <ul>
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>Contact</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* center */}
            <div className={styles.center}>

                {/* SMALL SCREEN ICONS */}
                <Image onClick={e => toggleSearchbar(e)} src={search} alt="search" />
                <Image src={wishlist} alt="wishlist-icon" />
                <Image src={cart} alt="cart-icon" />
            </div>

            {/* RIGHT */}
            <div className={styles.right}>

                {/* LARGE SCREENS */}
                <div className={styles.large}>

                    {/* SEARCH */}
                    <Search />

                    {/* ICONS */}
                    <div className={styles.icons}>

                        {/* WISHLIST */}
                        <Image src={wishlist} alt="wichlist-icon" />

                        {/* CART */}
                        <Image src={cart} alt="cart-icon" />
                    </div>
                </div>

                {/* BURGER ICON */}
                <div className={styles.small}>
                    <Image onClick={e => toggleMenu(e)} src={menu} alt="menu-icon" />
                </div>
            </div>
        </div>

        {/* MOBILE NAV */}
        <MobileMenu />
    </header>
  )
}

export default Header