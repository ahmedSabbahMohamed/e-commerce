import styles from "@/sass/pages/_Footer.module.scss"
import Image from "next/image"
import copyright from "@/assets/images/copyright.svg"
import Link from "next/link"

function Footer() {
  return (
    <>
      <footer className={styles.footer}>

        <div className="container">

          <div className={styles.footerContent}>
            
            <div className={styles.exclusive}>

                <h1>Exclusive</h1>
                <h4>Subscribe</h4>
                <p>Get 10% off your first order</p>

            </div>

            <div className={styles.support}>

              <h2>Support</h2>
              <ul>
                <li>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </div>

            <div className={styles.account}>

              <h2>Account</h2>
              
              <ul>
                <li>
                  <Link href={"/"}>My Account</Link>
                </li>
                <li>
                  <Link href={"/"}>Login / Register</Link>
                </li>
                <li>
                  <Link href={"/"}>Cart</Link>
                </li>
                <li>
                  <Link href={"/"}>Wishlist</Link>
                </li>
                <li>
                  <Link href={"/"}>Shop</Link>
                </li>
              </ul>
            </div>

            <div className={styles.quickLink}>

              <h2>Quick Link</h2>
              <ul>
                <li>
                  <Link href={"/"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"/"}>Terms Of Use</Link>
                </li>
                <li>
                  <Link href={"/"}>FAQ</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact</Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

          <div className={styles.copyright}>

            <p>
              <Image src={copyright} alt="copyright" />
              Copyright Rimel 2024. All right reserved
            </p>
          </div>
      </footer>
    </>
  )
}

export default Footer