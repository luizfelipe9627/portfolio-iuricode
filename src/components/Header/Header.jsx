import React from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false); // Cria um estado chamado mobileMenu, e a função setMobileMenu para alterar o estado. O valor inicial do estado é false.

  function handleClickMenu() {
    setMobileMenu(!mobileMenu); // Altera o estado do mobileMenu para o contrário do seu valor atual.

    if (mobileMenu) {
      document.body.style.overflow = "initial"; // O scroll da página é liberado.
    } else {
      document.body.style.overflow = "hidden"; // O scroll da página é bloqueado.
    }
  }

  function handleClickList() {
    setMobileMenu(false); // Altera o estado do mobileMenu para false.
    window.scrollTo({ top: 0, behavior: "smooth" }); // Faz o scroll da página para o topo.
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <Link to="/">
          <h1 className={styles.logo}>Portfólio</h1>
        </Link>

        <div className={styles.containerSize}>
          <div
            className={`${styles.menuHamburguer} ${
              mobileMenu ? styles.active : ""
            }`}
            data-menu="button"
            onClick={handleClickMenu}
          >
            <input type="checkbox" id={styles.checkboxMenu} />
            <label htmlFor="checkbox-menu" aria-label="Fechar e abrir o menu">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <nav className={styles.nav}>
            <ul className={`${mobileMenu ? styles.open : ""}`}>
              <li onClick={handleClickList}>
                <NavLink to="/">Início</NavLink>
              </li>
              <li onClick={handleClickList}>
                <NavLink to="/about">Sobre mim</NavLink>
              </li>
              <li onClick={handleClickList}>
                <NavLink to="/projects">Projetos</NavLink>
              </li>
              <li onClick={handleClickList}>
                <NavLink to="/services">Serviços</NavLink>
              </li>
              <li onClick={handleClickList}>
                <NavLink to="/skills">Minhas skills</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
