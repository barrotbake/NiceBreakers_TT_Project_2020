import Head from 'next/head';

import styles from '../styles/Home.module.css'
import User_Join_Form from '../components/user-form-component/user-join-form.js'
import User_Create_Form from '../components/create-game-component/create-form.js'

import Navbar from '../components/navbar/Navbar'
import Button from '../components/button/Button'

export default function Test() {

  return (
    <div>

      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>NiceBreakers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <User_Create_Form></User_Create_Form>

      </div>
    </div>
  );
}