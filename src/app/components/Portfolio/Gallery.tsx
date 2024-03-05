'use client'

import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { projects } from '@/data/project.data'

import styles from './Portfolio.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Gallery: FC = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        swipeable
        className={styles.items}
        onClickItem={() => console.log(1)}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <p className={styles.description}>{project.description}</p>
            <img alt={project.name} src={project.image} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Gallery
