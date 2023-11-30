import React from "react";
import styles from "./About.module.scss";
import Illustration from "../../assets/illustration.svg";
import Smile from "../../assets/smile.svg";
import Email from "../../assets/email.svg";
import Linkedin from "../../assets/linkedin.svg";
import Phone from "../../assets/phone.svg";

const About = () => {
  return (
    <>
      <section className={`${styles.introduction} container animeBottom`}>
        <div className={styles.wrapper}>
          <div className={styles.presentation}>
            <h1>Olá, eu sou o Luiz Felipe Silva :)</h1>
            <p>Desenvolvedor Front-End</p>

            <div className={styles.buttons}>
              <button className={styles.primary}>
                <a href="#">Download CV</a>
              </button>
              <button className={styles.secondary}>
                <a
                  href="mailto:felipesilva9627@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar em contato
                </a>
              </button>
            </div>
          </div>

          <div className={styles.vector}>
            <img src={Illustration} alt="Ilustração" />
          </div>
        </div>
      </section>

      <section className={`${styles.about} container animeBottom`}>
        <div className={styles.infos}>
          <div>
            <h1 className={styles.title}>Sobre mim</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.item}>
            <span>
              <img src={Smile} alt="Carinha sorridente" />
            </span>

            <h1>Meu nome</h1>
            <p>Luiz Felipe Silva</p>
          </div>

          <div className={styles.item}>
            <span>
              <img src={Email} alt="Envelope" />
            </span>

            <h1>E-mail</h1>
            <a
              href="mailto:felipesilva9627@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              felipesilva9627@hotmail.com
            </a>
          </div>

          <div className={styles.item}>
            <span>
              <img src={Linkedin} alt="Linkedin" />
            </span>

            <h1>Linkedin</h1>
            <a
              href="https://www.linkedin.com/in/luizfelipe9627"
              target="_blank"
              rel="noopener noreferrer"
            >
              @luizfelipe9627
            </a>
          </div>

          <div className={styles.item}>
            <span>
              <img src={Phone} alt="Telefone" />
            </span>

            <h1>Telefone</h1>
            <a
              href="tel:5511952353969"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 95235-3969
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
