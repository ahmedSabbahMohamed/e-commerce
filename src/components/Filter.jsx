'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "@/sass/pages/_Filter.module.scss"

function Filter() {

    const [filter, setFilter] = useState()

    const apiUrl = `http://localhost:3001/filter`

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setFilter(data))
    }, [])

  return (
    <>
        {/* START FILTER */}
        <div className={styles.filter}>
            <ul>
                {
                    filter
                    &&
                    filter.map(categ => {
                        return(
                            <li key={categ.page}>
                                <Link href={categ.page}>
                                    {categ.page}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Filter