import Head from 'next/head'
import styles from '../styles/Home.module.css'
import User_Join_Form from '../components/user-join-form.js'
import Navbar from '../components/Navbar'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NiceBreakers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nice Breakers!
        </h1>

        <p className={styles.description}>
          Ice breakers that are actually fun =)
        </p>
        <User_Join_Form></User_Join_Form>

        <div className={styles.grid}>

          <Button text="Create"/>

          <Button text="Join"/>

        </div>
      </main>
    </div>
  )
}
