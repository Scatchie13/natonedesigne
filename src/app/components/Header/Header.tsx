'use client'

import { FC } from 'react'
import styles from '../MainPage/MainPage.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="1">услуги</Link>
      <Link href="2">портфолио</Link>
      <Link href="3">о нас</Link>
      <Link href="4">отзывы</Link>
      <Link href="5">контакты</Link>
    </nav>
  )
}

export default Header
