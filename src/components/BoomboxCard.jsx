import styles from "@/sass/pages/_BoomboxCard.module.scss"
import Image from "next/image"
import boombox from "@/assets/images/boombox.svg"

function BoomboxCard() {
  return (
    <div className="container">

        {/* CONTENT */}
        <div className={styles.content}>

            {/* LEFT */}
            <div className={styles.left}>
                <p>Categories</p>
                <h2>Enhance Your Music Experience</h2>

                {/* <div className={styles.circles}>

                    <div className={styles.circle}>

                        <div className={styles.circleContent}>
                            <h3>23</h3>
                            <p>Hours</p>
                        </div>
                    </div>
                </div> */}

                {/* BUY NOW */}
                <div className={styles.buyNow}>

                    <button>Buy Now!</button>
                </div>
            </div>

            {/* RIGHT */}
            <div className={styles.right}>

                <div className={styles.blur}></div>

                <div className={styles.image}>

                    <Image src={boombox} alt="boombox" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default BoomboxCard