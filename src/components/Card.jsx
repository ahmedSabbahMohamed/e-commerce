import styles from "@/sass/pages/_Card.module.scss"

function Card({ image, title, price1, price2 }) {
  return (
    <>

        <div className={styles.card}>

            {/* CARD IMAGE */}
            <div className={styles.cardImage}>
                <img src={image} alt="card-image" />
            </div>

            {/* CARD BODY */}
            <div className={styles.cardBody}>

                {/* CARD TITLE */}
                <div className={styles.cardTitle}>
                    <h3>{title}</h3>
                </div>

                {/* PRICE */}
                <div className={styles.cardPrice}>
                    <span>${price1}</span>
                    <span>{price2}</span>
                </div>

                {/* CARD STARS */}
                {/* <div className={styles.cardStars}>
                    <img src={} alt="" />
                    <img src={} alt="" />
                    <img src={} alt="" />
                    <img src={} alt="" />
                    <img src={} alt="" />
                </div> */}
            </div>

            {/* DISCOUNT
            <div className={styles.cardDiscount}>
                    {discount}%
            </div> */}
        </div>
    </>
  )
}

export default Card