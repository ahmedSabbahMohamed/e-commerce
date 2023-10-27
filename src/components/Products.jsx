'use client'

import { useState, useEffect } from "react"
import styles from "@/sass/pages/_Products.module.scss"
import SectionHeader from "./SectionHeader"
import Card from "./Card"
import Btn from "./Btn"

function Products() {

  const [products, setProducts] = useState()
  const apiURL = `http://localhost:3001/products`
  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className="container">

      <div className={styles.products}>

          {/* SECTION HEADER */}
          <SectionHeader title={"Our Products"} header={"Explore Our Products"} />

          {/* PRODUCTS CARDS */}
          <div className={styles.productsCards}>
            
            {
              products
              &&
              products.map(card => {
                return (
                  <div key={card.id}>
                    <Card image={card.image} title={card.title} price1={card.price} />
                  </div>
                )
              })
            }
          </div>

          {/* VIEW ALL PRODUCTS */}
          <div className={styles.viewAllProducts}>
            <Btn text={"View All Products"} />
          </div>
      </div>
    </div>
  )
}

export default Products