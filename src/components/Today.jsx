'use client'

import { useEffect, useState } from "react"
import styles from "@/sass/pages/_Today.module.scss"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import leftArrow from "@/assets/images/left-icon.png"
import rightArrow from "@/assets/images/right-icon.png"
import SectionHeader from "./SectionHeader"
import Card from "./Card"
import Btn from "./Btn"

function Today() {

    const CustomPrevArrow = ({ onClick }) => (
        <button className={styles.prev} onClick={onClick}>
            <Image style={{width: '32px', height: '32px'}} src={leftArrow} alt="prev" />
        </button>
      );
    
      const CustomNextArrow = ({ onClick }) => (
        <button className={styles.next} onClick={onClick}>
            <Image style={{width: '32px', height: '32px'}} src={rightArrow} alt="next" />
        </button>
      );

    // SLIDER
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    const apiURL = `http://localhost:3001/today`

    const [card, setCard] = useState()

    useEffect(() => {
        fetch(apiURL)
        .then(res => res.json())
        .then(data => setCard(data))
    }, [])

  return (
       <div className="container">

         <div className={styles.todayContent}>

            {/* TODAY'S */}
            <SectionHeader title={"Today's"} header={"Flash Sales"} />

            {/* body */}
            <div className={styles.test}>

              <div>

                  <div className="today-slider">
                      <Slider {...settings}>

                          {
                              card
                              &&
                              card.map(card => {
                                  return (
                                    <div key={card.id} className={styles.cardContainer}>
                                      
                                      <Card image={card.image} title={card.title} price1={card.price1} price2={`$${card.price2}`} />
                                      
                                      <div className={styles.cardDiscount}>
                                              {card.discount}%
                                      </div>
                                    </div>
                                  )
                              })
                          }
                      </Slider>
                  </div>

              </div>
              {/* VIEW ALL PRODUCTS */}
              <div className={styles.viewAllproducts}>
                <Btn text={"View All Products"} />
              </div>
            </div>
         </div>
       </div>

      // <div className="container">
        
      //   <div className={styles.todayContent}>

      //       <div>

      //           {/* TODAY'S */}
      //           <SectionHeader title={"Today's"} header={"Flash Sales"} />

      //       </div>

      //       <div className={styles.test}>
      //           <div>

      //               <div className="today-slider">
      //                   <Slider {...settings}>

      //                       {
      //                           card
      //                           &&
      //                           card.map(card => {
      //                               return (
      //                                 <div key={card.id} className={styles.cardContainer}>
                                        
      //                                   <Card image={card.image} title={card.title} price1={card.price1} price2={`$${card.price2}`} />
                                        
      //                                   <div className={styles.cardDiscount}>
      //                                           {card.discount}%
      //                                   </div>
      //                                 </div>
      //                               )
      //                           })
      //                       }
      //                   </Slider>
      //               </div>

      //           </div>
      //       </div>

      //   </div>
      //     {/* VIEW ALL PRODUCTS */}
      //     <div className={styles.viewAllproducts}>
      //       <Btn text={"View All Products"} />
      //     </div>
      // </div>
  )
}

export default Today