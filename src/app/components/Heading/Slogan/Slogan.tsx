import { ArrowRightOutlined } from '@ant-design/icons'

import styles from '../../MainPage/MainPage.module.scss'

const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <h4>
        Открываем ваше пространство новым смыслом: <br /> инновационный дизайн
        от профессионалов <br /> с любовью к деталям и искусству
      </h4>
      <a className={styles.arrow} href="#">
        <svg
          width="101"
          height="16"
          viewBox="0 0 101 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9L100 9V7L0 7L0 9Z"
            fill="#FF0000"
          />
        </svg>
      </a>
    </div>
  )
}

export default Slogan
