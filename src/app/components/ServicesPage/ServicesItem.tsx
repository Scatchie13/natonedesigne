import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from './Service.module.scss'
import Button from '../UI/Button'
import Link from 'next/link'

interface IServiceItem {
  name: string
  image: string
  description: string
}

const ServicesItem: FC<IServiceItem> = ({ name, image, description }) => {
  return (
    <motion.div
      aria-label="Select item"
      role="button"
      initial={{ scale: 1 }}
      // animate={true ? { scale: 1.1 } : {}}
      transition={{ duration: 0.6, type: 'spring' }}
      className={styles.item}
      onClick={() => console.log(1)}
    >
      <Image
        alt={name}
        src={image}
        width={400}
        height={280}
        className={styles.image}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.first}>
        <Link href="/">Заказать</Link>
      </div>
      <Button className="second" />
    </motion.div>
  )
}

export default ServicesItem
