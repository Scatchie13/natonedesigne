import React from 'react'
import Gallery from './Gallery'

import styles from './Portfolio.module.scss'

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Портфолио</h1>
      <Gallery />
    </section>
  )
}

export default Portfolio
