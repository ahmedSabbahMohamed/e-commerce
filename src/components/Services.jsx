'use client'

import { useState, useEffect } from "react"
import group from "@/assets/images/group.svg"
import styles from "@/sass/pages/_Services.module.scss"
import Image from "next/image"

function Services() {

  const [sercies, setServices] = useState()
  const apiURL = `http://localhost:3001/services`
  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <div className={styles.services}>

        {
            sercies
            &&
            sercies.map(service => {
                return (
                    <div key={service.id} className={styles.service}>
                        
                        <div className={styles.group}>

                            <Image src={group} alt="group-icon" />
                            <img src={service.image} alt="service-icon" />
                        </div>

                        <div className={styles.serviceBody}>
                            <h3>{service.title}</h3>
                            <p>{service.paragraph}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Services