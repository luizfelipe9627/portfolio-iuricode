import React from "react";
import styles from "./Services.module.scss";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Title from "../../components/Title/Title";
import Check from "../../assets/svg/check.svg";
import Code from "../../assets/svg/code.svg";
import Exclamation from "../../assets/svg/exclamation.svg";
import File from "../../assets/svg/file.svg";
import Paint from "../../assets/svg/paint.svg";
import Phone from "../../assets/svg/phone.svg";
import Suitcase from "../../assets/svg/suitcase.svg";
import Cog from "../../assets/svg/cog.svg";
import Pager from "../../assets/svg/pager.svg";

const Services = () => {
  return (
    <section className={`${styles.services} container animeBottom`}>
      <Title>Serviços</Title>

      <div className={styles.cards}>
        <ServiceCard srcImg={Pager} altImg="Pager">
          Landing Pages
        </ServiceCard>
        <ServiceCard srcImg={File} altImg="File">
          Formulários Interativos
        </ServiceCard>
        <ServiceCard srcImg={Phone} altImg="Phone">
          Interfaces Responsivas
        </ServiceCard>
        <ServiceCard srcImg={Suitcase} altImg="Suitcase">
          Portfólios Online
        </ServiceCard>
        <ServiceCard srcImg={Cog} altImg="Code">
          Componentes Interativos
        </ServiceCard>
        <ServiceCard srcImg={Code} altImg="Code">
          Integração de API
        </ServiceCard>
        <ServiceCard srcImg={Exclamation} altImg="Code">
          Páginas de 404
        </ServiceCard>
        <ServiceCard srcImg={Check} altImg="Code">
          Páginas de Confirmação
        </ServiceCard>
        <ServiceCard srcImg={Paint} altImg="Code">
          Animações Front-End
        </ServiceCard>
      </div>
    </section>
  );
};

export default Services;
