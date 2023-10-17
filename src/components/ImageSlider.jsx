'use client'

import { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "@/sass/pages/_ImageSlider.module.scss"
import leftArrow from "@/assets/images/left-icon.png"
import rightArrow from "@/assets/images/right-icon.png"
import Image from "next/image"

function ImageSlider() {

    const CustomPrevArrow = ({ onClick }) => (
        <button style={{all: 'unset', position: 'absolute', left: '10px', top: '46%', zIndex: '9999', cursor: 'pointer'}} className="custom-prev-arrow" onClick={onClick}>
            <Image style={{width: '32px', height: '32px'}} src={leftArrow} alt="prev" />
        </button>
      );
    
      const CustomNextArrow = ({ onClick }) => (
        <button style={{all: 'unset', position: 'absolute', right: '10px', top: '46%', cursor: 'pointer'}} className="custom-next-arrow" onClick={onClick}>
            <Image style={{width: '32px', height: '32px'}} src={rightArrow} alt="next" />
        </button>
      );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }

  const [images, setImages] = useState()
  const apiURL = `http://localhost:3001/slider`

  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => setImages(data))
  }, [])

  return (
    <>
    <div className={styles.imageSlider}>
        <Slider {...settings}>
            {
                images
                &&
                images.map(img => {
                    return (
                        <img key={img.id} src={img.image} alt="image-slider" />
                    )
                })
            }
        </Slider>
    </div>
    </>
  )
}

export default ImageSlider