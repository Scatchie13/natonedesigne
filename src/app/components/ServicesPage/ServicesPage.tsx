'use client'
import ServicesItem from './ServicesItem'
import { services } from '@/data/data'

import styles from './Service.module.scss'

const ServicesPage = () => {
  return (
    <section className={styles.carousel}>
      {services.map((service) => (
        <ServicesItem key={service.name} {...service} />
      ))}
    </section>
  )
}

export default ServicesPage
