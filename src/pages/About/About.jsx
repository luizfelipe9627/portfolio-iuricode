import React from "react";
import styles from "./About.module.scss";
import Smile from "../../assets/svg/smile.svg";
import Email from "../../assets/svg/email.svg";
import Linkedin from "../../assets/svg/linkedin.svg";
import Phone from "../../assets/svg/phone.svg";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Title from "../../components/Title/Title";

const About = () => {
  return (
    <>
      <section className={`${styles.about} container animeBottom`}>
        <div className={styles.wrapper}>
          <Title>Sobre mim</Title>

          <div className={styles.content}>
            <p className={styles.description}>
              Sou um desenvolvedor web front-end com experiência na criação de
              interfaces de usuário atraentes e funcionais. Ao longo dos anos,
              adquiri habilidades sólidas em tecnologias atuais. Estou sempre
              buscando aprender e implementar as melhores práticas no
              desenvolvimento web para criar experiências de usuário
              excepcionais.
            </p>
            <p className={styles.description}>
              Tenho dedicado os últimos dois anos ao estudo e prática em
              desenvolvimento web front-end. Possuo especialização na criação de
              landing pages funcionais, utilizando as tecnologias mais
              atualizadas disponíveis no mercado.
            </p>
          </div>
        </div>

        <div className={styles.contact}>
          <ContactInfo
            srcImg={Smile}
            altImg="Carinha sorridente"
            title="Meu nome"
            subtitle="Luiz Felipe Silva"
          />
          <ContactInfo
            srcImg={Email}
            altImg="Envelope"
            aHref="mailto:felipesilva9627@hotmail.com"
            title="E-mail"
            subtitle="felipesilva9627@hotmail.com"
          />
          <ContactInfo
            srcImg={Linkedin}
            altImg="Linkedin"
            aHref="https://www.linkedin.com/in/luizfelipe9627"
            title="Linkedin"
            subtitle="@luizfelipe9627"
          />
          <ContactInfo
            srcImg={Phone}
            altImg="Telefone"
            aHref="tel:5511952353969"
            title="Telefone"
            subtitle="(11) 95235-3969"
          />
        </div>
      </section>
    </>
  );
};

export default About;
