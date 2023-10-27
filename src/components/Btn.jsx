import styles from "@/sass/pages/_Btn.module.scss"

function Btn({ text }) {
  return (
    <button className={styles.btn}>{text}</button>
  )
}

export default Btn