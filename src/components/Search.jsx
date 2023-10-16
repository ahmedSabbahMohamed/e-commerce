import Image from "next/image"
import search from "@/assets/images/search.svg"
import styles from "@/sass/pages/_Search.module.scss"

function Search() {
  return (
    <>
        <div className={`${styles.search} ${styles.showSearch}`}>
            <input type="text" name="text" id="text" placeholder="What are you looking for?" />
            <span className="search-icon">
                <Image src={search} alt="search-icon" />
            </span>
        </div>
    </>
  )
}

export default Search