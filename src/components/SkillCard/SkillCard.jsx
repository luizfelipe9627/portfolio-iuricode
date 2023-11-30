import React from "react";
import styles from "./SkillCard.module.scss";

const SkillCard = ({ srcImg, altImg }) => {
  return (
    <div className={styles.skillCard}>
      <img src={srcImg} alt={altImg} />
    </div>
  );
};

export default SkillCard;
