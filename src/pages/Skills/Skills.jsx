import React from "react";
import styles from "./Skills.module.scss";
import Title from "../../components/Title/Title";
import SkillCard from "../../components/SkillCard/SkillCard";
import HTML from "../../assets/svg/html.svg";
import CSS from "../../assets/svg/css.svg";

const Skills = () => {
  return (
    <section className={`${styles.skills} container animeBottom`}>
      <Title>Skills</Title>

      <div className={styles.cards}>
        <SkillCard srcImg={HTML} altImg="HTML icon" />
        <SkillCard srcImg={CSS} altImg="CSS icon" />
      </div>
    </section>
  );
};

export default Skills;
