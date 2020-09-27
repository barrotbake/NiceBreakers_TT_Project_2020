import Head from 'next/head';

import styles from '../styles/Home.module.css'
import User_Join_Form from '../components/user-form-component/user-join-form.js'
import User_Create_Form from '../components/create-game-component/create-form.js'
import Host_Join_Lobby from '../components/host-join-lobby-component/host-join-lobby.js'
import User_Join_Lobby from '../components/user-join-lobby-component/user-join-lobby.js'

import Navbar from '../components/navbar/Navbar'
import TruthLiesCard from '../components/truthLiesCard/truthLiesCard'
import FlexCard from '../components/flexCard/flexCard'

export default function Test() {

  return (
    <div>
<<<<<<< HEAD

      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>NiceBreakers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        {/* <Host_Join_Lobby></Host_Join_Lobby> */}
        {/* <User_Join_Lobby></User_Join_Lobby> */}
        <User_Join_Form></User_Join_Form>


      </div>
=======
      <FlexCard>Hekko</FlexCard>
>>>>>>> 3383364aa8b929e05417771bddb5cef57ff882a6
    </div>
  );
}