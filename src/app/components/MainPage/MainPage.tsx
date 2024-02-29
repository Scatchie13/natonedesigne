import React from 'react'
import Header from '../Header/Header'

import styles from './MainPage.module.scss'
import Heading from '../Heading/Heading'
import Slogan from '../Heading/Slogan/Slogan'

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Slogan />
      <Heading />
    </div>
  )
}

export default MainPage
