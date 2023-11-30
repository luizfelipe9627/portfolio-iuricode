import React from "react";
import styles from "./ContactInfo.module.scss";

const ContactInfo = ({ srcImg, altImg, aHref, title, subtitle }) => {
  return (
    <div className={styles.contactInfo}>
      <span>
        <img src={srcImg} alt={altImg} />
      </span>

      <h1>{title}</h1>
      <a href={aHref} target="_blank" rel="noopener noreferrer">
        {subtitle}
      </a>
    </div>
  );
};

export default ContactInfo;
