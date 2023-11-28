import React from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <Link to="/">
          <h1 className={styles.logo}>Portfólio</h1>
        </Link>

        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <NavLink to="/">Sobre mim</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/services">Serviços</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Minhas skills</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
