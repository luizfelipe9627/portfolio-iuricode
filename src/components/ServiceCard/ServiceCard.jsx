import React from "react";
import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ srcImg, altImg, children }) => {
  return (
    <>
      <div className={styles.serviceCard}>
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <img src={srcImg} alt={altImg} />
          </div>

          <div className={styles.title}>
            <h1>{children}</h1>
          </div>

          <span className={styles.detail} />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
