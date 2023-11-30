import React from "react";
import styles from "./Services.module.scss";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Title from "../../components/Title/Title";
import Code from "../../assets/svg/code.svg";

const Services = () => {
  return (
    <section className={`${styles.services} container animeBottom`}>
      <Title>Serviços</Title>

      <div className={styles.cards}>
        <ServiceCard srcImg={Code} altImg="Code">
          Criação de sites
        </ServiceCard>
        <ServiceCard srcImg={Code} altImg="Code">
          Criação de sites
        </ServiceCard>
        <ServiceCard srcImg={Code} altImg="Code">
          Criação de sites
        </ServiceCard>
        <ServiceCard srcImg={Code} altImg="Code">
          Criação de sites
        </ServiceCard>
      </div>
    </section>
  );
};

export default Services;
