import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/Logo.svg"
import search from "@/assets/images/search.svg"
import cart from "@/assets/images/cart.svg"
import wishlist from "@/assets/images/Wishlist.svg"

function Header() {
  return (
    // START HEADER
    <header>

        {/* CONTENT */}
        <div className="">
            {/* LEFT */}
            <div className="right">

                {/* LOGO */}
                <div className="logo">
                    <Image src={ logo } alt="logo" />
                </div>

                {/* NAV LINKS */}
                <nav>
                    <ul>
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Contact</Link>
                        </li>
                        <li>
                            <Link href={"/"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* RIGHT */}
            <div>

                {/* SEARCH */}
                <div className="search">
                    <input type="text" name="text" id="text" placeholder="What are you looking for?" />
                    <span className="search-icon">
                        <Image src={search} alt="search-icon" />
                    </span>
                </div>

                {/* WISHLIST */}
                <div>
                    <Image src={wishlist} alt="wichlist-icon" />
                </div>

                {/* CART */}
                <div className="">
                    <Image src={cart} alt="cart-icon" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header