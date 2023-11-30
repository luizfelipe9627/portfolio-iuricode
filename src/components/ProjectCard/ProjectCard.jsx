import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ aHref, img, title, techs }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.img}>
        <a
          href={aHref}
          title="Clique para abrir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img} alt={img} />
        </a>
      </div>

      <div className={styles.content}>
        <h1>{title}</h1>
        <span>Tecnologias: {techs}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
