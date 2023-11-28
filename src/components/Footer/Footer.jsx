import React from "react";
import styles from "./Footer.module.scss";
import Code from "../../assets/code.svg";
import ColorLens from "../../assets/color-lens.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <p className={styles.year}>© 2023 - Todos os direitos reservados.</p>

        <div className={styles.copy}>
          <div className={styles.creator}>
            <img src={ColorLens} alt="Tábua de pintura" />
            <p className={styles.paragraph}>
              Layout criado por{" "}
              <a
                href="https://www.linkedin.com/in/iuricode"
                target="_blank"
                rel="noreferrer"
              >
                Iuri Silva
              </a>
            </p>
          </div>

          <div className={styles.creator}>
            <img src={Code} alt="Código" />
            <p className={styles.paragraph}>
              Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/luizfelipe9627"
                target="_blank"
                rel="noreferrer"
              >
                Luiz Felipe Silva
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
