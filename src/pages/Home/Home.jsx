import React from "react";
import Illustration from "../../assets/svg/illustration.svg";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={`${styles.home} container animeBottom`}>
      <div className={styles.wrapper}>
        <div className={styles.presentation}>
          <h1>Olá, eu sou o Luiz Felipe Silva :)</h1>
          <p>Desenvolvedor Front-End</p>

          <div className={styles.buttons}>
            <a
              href="https://drive.usercontent.google.com/download?id=1_TrhoOqfIlQie-kBNXyTeolIh67-gNiM&export=download&authuser=0&confirm=t&uuid=c07fd05e-d086-480c-adef-550642ee1dcd&at=APZUnTXd9m_S_lgmXVNSgbW2cb4p:1695338086061"
              download
              className={styles.primary}
            >
              Download CV
            </a>

            <a
              className={styles.secondary}
              href="mailto:felipesilva9627@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className={styles.vector}>
          <img src={Illustration} alt="Ilustração" />
        </div>
      </div>
    </section>
  );
};

export default Home;
