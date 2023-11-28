import React from "react";
import styles from "./About.module.scss";
import Illustration from "../../assets/illustration.svg";

const About = () => {
  return (
    <section className={`${styles.about} container`}>
      <div className={styles.info}>
        <div className={styles.presentation}>
          <h1>Olá, eu sou o Luiz Felipe :)</h1>
          <p>Desenvolvedor Front-End</p>
        </div>

        <div className={styles.buttons}>
          <button>
            <a href="#">Download CV</a>
          </button>
          <button>
            <a href="mailto:felipesilva9627@hotmail.com">Entrar em contato</a>
          </button>
        </div>
      </div>

      <div className={styles.vector}>
        <img src={Illustration} alt="Ilustração" />
      </div>
    </section>
  );
};

export default About;
