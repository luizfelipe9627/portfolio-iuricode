import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <p className={styles.paragraph}>
          Orgulhosamente feito por{" "}
          <a
            href="https://www.linkedin.com/in/iuricode"
            target="_blank"
            rel="noreferrer"
          >
            Iuri Silva
          </a>{" "}
          e{" "}
          <a
            href="https://www.linkedin.com/in/luizfelipe9627"
            target="_blank"
            rel="noreferrer"
          >
            Luiz Felipe Silva
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
