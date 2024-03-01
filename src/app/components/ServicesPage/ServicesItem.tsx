import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from './Service.module.scss'

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
      <p className={styles.descriptions}>{description}</p>
      <button>idi nahuy</button>
    </motion.div>
  )
}

export default ServicesItem
