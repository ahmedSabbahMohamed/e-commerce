import styles from "@/sass/pages/_Hero.module.scss"
import Filter from "./Filter"
import ImageSlider from "./ImageSlider"

function Hero() {
  return (
    <section className={styles.heroSection}>
        <div className="container">
            <div className={styles.heroContent}>
                <Filter />
                <ImageSlider />
            </div>
        </div>
    </section>
    )
}

export default Hero