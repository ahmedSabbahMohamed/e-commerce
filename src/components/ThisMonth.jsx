'use client'

import { useState, useEffect } from "react"
import SectionHeader from "./SectionHeader"
import styles from "@/sass/pages/_ThisMonth.module.scss"
import Card from "./Card"
import Btn from "./Btn"

function ThisMonth() {

  const [bestSelling, setBestSelling] = useState()
  const apiURL = `http://localhost:3001/bestSelling`
  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => setBestSelling(data))
  }, [])

  return (
    <div>

        <div className="container">
            
            <div className={styles.thisMonth}>

                <div className={styles.thisMonthHeader}>

                    {/* SECTIONHEADER COMPONENT */}
                    <div>
                        <SectionHeader title={"This Month"} header={"Best Selling Products"} />
                    </div>

                    {/* VIEW ALL */}
                    <div className={styles.viewAll}>
                        <Btn text={"View All"} />
                    </div>
                </div>

                <div className={styles.cardContainer}>

                    {
                        bestSelling
                        &&
                        bestSelling.map(card => {
                            return (
                                <div key={card.id}>
                                    <Card image={card.image} title={card.title} price1={card.price1} price2={`$${card.price2}`}/>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>

    </div>
  )
}

export default ThisMonth