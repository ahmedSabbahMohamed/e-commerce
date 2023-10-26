'use client'

import { useState, useEffect } from "react"
import styles from "@/sass/pages/_Featured.module.scss"
import SectionHeader from "./SectionHeader"
import Link from "next/link"

function Featured() {

  const [featured, setFeatured] = useState()
  const apiURL = `http://localhost:3001/featured`

  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => setFeatured(data))
  }, [])

  return (
    <div className="container">

        <div className={styles.featured}>

            {/* SECTION HEADER */}
            <SectionHeader title={"Featured"} header={"New Arrival"} />

            {/* FEATURED CONTENT */}
            <div className={styles.featuredContent}>

              <div className={styles.grid}>

                {
                  featured
                  &&
                  featured.map(feat => {
                    return (
                      <Link href={feat.link} key={feat.id} className={styles.card}>

                        <img src={feat.image}alt="featured-images" />
                        <div className={styles.desc}>
                          <h2>{feat.title}</h2>
                          <p>{feat.desc}</p>
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
        </div>

    </div>
  )
}

export default Featured