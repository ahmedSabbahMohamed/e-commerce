'use client'

import { useState, useEffect } from "react"
import SectionHeader from "./SectionHeader"
import styles from "@/sass/pages/_Categories.module.scss"

function Categories() {

  const [categories, setCategories] = useState()
  const apiURL = `http://localhost:3001/categories`
  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  

  return (
    <>

            <div className="container">

              <div className={styles.categoriesSection}>

                  <SectionHeader title={"Categories"} header={"Browse By Category"} />

                  <div className={styles.categories}>

                    {
                      categories
                      &&
                      categories.map(categ => {
                        return (
                            <div key={categ.id} className={styles.square}>

                                {/* SQUAR IMAGE */}
                                <div className={styles.squareImage}>
                                  <img src={categ.icon} alt={categ.text} />
                                </div>

                                {/* SQUARE TEXT */}
                                <div className={styles.squareText}>
                                  <h4>{categ.text}</h4>
                                </div>
                            </div>
                        )
                      })
                    }
                  </div>

              </div>

            </div>
    </>
  )
}

export default Categories