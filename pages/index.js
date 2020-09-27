import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import User_Join_Form from "../components/user-form-component/user-join-form.js";
import User_Create_Form from "../components/create-game-component/create-form.js";
import Nav from "../components/nav/Nav";
import Button from "../components/button/Button";
import MainContainer from "../components/mainContainer/MainContainer";
import SweetAlert from "sweetalert2";

export default function Home() {
  const router = useRouter();
  return (
    <MainContainer>
      <Head>
        <title>NiceBreakers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <a role="header">NiceBreakers</a>
        </div>
        <div className={styles.grid}>
          <Button
            text="Join"
            onClick={async (event) => {
              event.preventDefault();
              const { value } = await SweetAlert.fire({
                title: "Enter your join code 😁",
                input: "text",
                inputValue: "",
                showCancelButton: true,
                inputValidator(value) {
                  if (!/^([a-zA-Z0-9]{6})$/.test(value)) {
                    return "A join code must contain 6 alphanumeric characters.";
                  }
                },
              });
              if (value !== undefined) {
                router.push(`/${value}`);
              }
            }}
          />
          <Button
            text="Create"
            onClick={(event) => {
              event.preventDefault();
              router.push("/host");
            }}
          />
        </div>
      </main>
    </MainContainer>
  );
}
