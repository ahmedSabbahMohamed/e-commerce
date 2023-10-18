import styles from "@/sass/pages/_SectionHeader.module.scss"
import Image from "next/image"
import today from "@/assets/images/today.svg"

function SectionHeader({ title, header }) {
  return (
    <div className={styles.today}>

                <div className={styles.heading}>
                    <Image src={today} alt="today-svg" />
                    <h2>{title}</h2>
                </div>

                <div className={styles.flashSailes}>
                    <h3>{header}</h3>
                </div>
    </div>
  )
}

export default SectionHeader