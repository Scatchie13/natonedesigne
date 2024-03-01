import MainPage from './components/MainPage/MainPage'
import ServicesPage from './components/ServicesPage/ServicesPage'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <MainPage />
      </div>
      <div className={styles.services}>
        <ServicesPage />
      </div>
    </main>
  )
}
