import Button from '../../UI/Button'

import styles from '../../MainPage/MainPage.module.scss'

const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <h4>
        Открываем ваше пространство новым смыслом: <br /> инновационный дизайн
        от профессионалов <br /> с любовью к деталям и искусству
      </h4>
      <Button className="arrow" />
    </div>
  )
}

export default Slogan
