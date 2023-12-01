import styles from "./Skills.module.scss";
import Title from "../../components/Title/Title";
import SkillCard from "../../components/SkillCard/SkillCard";
import HTML from "../../assets/svg/html.svg";
import CSS from "../../assets/svg/css.svg";
import JavaScript from "../../assets/svg/javascript.svg";
import React from "../../assets/svg/react.svg";
import TypeScript from "../../assets/svg/typescript.svg";
import Git from "../../assets/svg/git.svg";
import GitHub from "../../assets/svg/github.svg";
import StyledComponents from "../../assets/svg/styled-components.svg";
import Gulp from "../../assets/svg/gulp.svg";
import Sass from "../../assets/svg/sass.svg";

const Skills = () => {
  return (
    <section className={`${styles.skills} container animeBottom`}>
      <Title>Skills</Title>

      <div className={styles.cards}>
        <SkillCard srcImg={HTML} altImg="HTML icon" />
        <SkillCard srcImg={CSS} altImg="CSS icon" />
        <SkillCard srcImg={Sass} altImg="Sass icon" />
        <SkillCard srcImg={JavaScript} altImg="JavaScript icon" />
        <SkillCard srcImg={React} altImg="React icon" />
        <SkillCard srcImg={TypeScript} altImg="TypeScript icon" />
        <SkillCard srcImg={StyledComponents} altImg="Styled Components icon" />
        <SkillCard srcImg={Gulp} altImg="Gulp icon" />
        <SkillCard srcImg={Git} altImg="Git icon" />
        <SkillCard srcImg={GitHub} altImg="GitHub icon" />
      </div>
    </section>
  );
};

export default Skills;
