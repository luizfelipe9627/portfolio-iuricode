import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Title from "../../components/Title/Title";
import AnimaisFantasticos from "../../assets/img/animais-fantasticos.webp";
import Bikcraft from "../../assets/img/bikcraft.webp";
import Blogames from "../../assets/img/blogames.webp";
import Calculadora from "../../assets/img/calculadora.webp";
import Dados from "../../assets/img/dados.webp";
import Dogs from "../../assets/img/dogs.webp";
import FormularioPesquisa from "../../assets/img/formulario-pesquisa.webp";
import Freshmanstore from "../../assets/img/freshmanstore.webp";
import LandingPageM3 from "../../assets/img/landing-page-m3.webp";
import Naped from "../../assets/img/naped.webp";
import Pizzaria from "../../assets/img/pizzaria.webp";
import Ranek from "../../assets/img/ranek.webp";
import RiotGames from "../../assets/img/riot-games.webp";
import Rocketcoffee from "../../assets/img/rocketcoffee.webp";
import Sac from "../../assets/img/sac.webp";
import SlideStories from "../../assets/img/slide-stories.webp";
import SlideShow from "../../assets/img/slide-show.webp";
import Steam from "../../assets/img/steam.webp";
import SuperMario from "../../assets/img/super-mario.webp";
import TouristAttractions from "../../assets/img/tourist-attractions.webp";
import Wildbeast from "../../assets/img/wildbeast.webp";

const Projects = () => {
  return (
    <section className={`${styles.projects} container animeBottom`}>
      <Title>Projetos</Title>

      <div className={styles.cards}>
        <ProjectCard
          aHref="https://luizfelipe9627-animais-fantasticos.netlify.app
          "
          img={AnimaisFantasticos}
          title="Animais Fantásticos"
          techs="HTML5, CSS3, JAVASCRIPT, WEBPACK, BABEL"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-bikcraft2.netlify.app"
          img={Bikcraft}
          title="Bikcraft"
          techs="HTML5, CSS3, JAVASCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-blogames.netlify.app"
          img={Blogames}
          title="Blogames"
          techs="REACT.JS, STYLED COMPONENTS"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-calculadora-rocketseat.netlify.app"
          img={Calculadora}
          title="Calculadora Rocketseat"
          techs="REACT.JS, STYLED COMPONENTS"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-dados-origamid.netlify.app"
          img={Dados}
          title="Dados"
          techs="HTML5, CSS3, TYPESCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-dogs.netlify.app"
          img={Dogs}
          title="Dogs"
          techs="REACT.JS, CSS3"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-formulario-pesquisa.netlify.app"
          img={FormularioPesquisa}
          title="Formulário Pesquisa"
          techs="HTML5, CSS3, TYPESCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-landing-page-m3.netlify.app"
          img={LandingPageM3}
          title="Landing Page M3 Academy"
          techs="HTML5, CSS3"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-freshmanstore.netlify.app"
          img={Freshmanstore}
          title="Freshmanstore"
          techs="HTML5, CSS3, JAVASCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-naped.netlify.app"
          img={Naped}
          title="Naped"
          techs="REACT.JS, CSS3"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-pizzaria.netlify.app"
          img={Pizzaria}
          title="Pizzaria"
          techs="HTML5, CSS3, JAVASCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-ranek.netlify.app"
          img={Ranek}
          title="Ranek"
          techs="REACT.JS, CSS3"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-login-lol.netlify.app"
          img={RiotGames}
          title="Riot Games"
          techs="HTML5, CSS3, JAVASCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-rocketcoffee.netlify.app"
          img={Rocketcoffee}
          title="Rocketcoffee"
          techs="HTML5, CSS3, JAVASCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-simulador-sac.netlify.app"
          img={Sac}
          title="Simulador de Financiamento"
          techs="HTML5, CSS3, JAVASCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-slide-stories-origamid.netlify.app/"
          img={SlideStories}
          title="Slide Stories"
          techs="REACT.JS, TYPESCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-slideshow-origamid.netlify.app"
          img={SlideShow}
          title="Slide Show"
          techs="REACT.JS, CSS3"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-steam-redesign.netlify.app"
          img={Steam}
          title="Steam"
          techs="HTML5, CSS3, JAVASCRIPT, WEBPACK"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-super-mario.netlify.app"
          img={SuperMario}
          title="Super Mario"
          techs="HTML5, CSS3, JAVASCRIPT"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-tourist-attractions.netlify.app"
          img={TouristAttractions}
          title="Tourist Attractions"
          techs="HTML5, SASS, JAVASCRIPT, GULP"
        />
        <ProjectCard
          aHref="https://luizfelipe9627-wildbeast.netlify.app"
          img={Wildbeast}
          title="Wildbeast"
          techs="HTML5, CSS3"
        />
      </div>
    </section>
  );
};

export default Projects;
