import Head from 'next/head'
import styles from '../styles/Home.module.css'
import User_Join_Form from '../components/user-form-component/user-join-form.js'

import Navbar from '../components/navbar/Navbar'
import Button from '../components/button/Button'
import MainContainer from '../components/mainContainer/MainContainer'

export default function Home() {
  return (
      <MainContainer>
        <Head>
          <title>NiceBreakers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <main className={styles.main}>

          <div className={styles.title}> <a> Nice Breakers </a> </div>
          <div className={styles.grid}>


            <Button text="Create"/>

            <Button text="Join" />


          </div>
        </main>

      </MainContainer>
  );
}
