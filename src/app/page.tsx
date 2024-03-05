import About from './components/About/About'
import MainPage from './components/MainPage/MainPage'
import Portfolio from './components/Portfolio/Portfolio'
import ServicesPage from './components/ServicesPage/ServicesPage'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <section className={styles.main}>
        <MainPage />
      </section>
      <section className={styles.services}>
        <ServicesPage />
      </section>
      <section className={styles.portolio}>
        <Portfolio />
      </section>
      {/* <section className={styles.about}>
        <About />
      </section> */}
    </main>
  )
}
