import React, { useRef } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import useMedia from "../../hooks/useMedia"; // Importando o hook useMedia

const Header = () => {
  const mobile = useMedia("(max-width: 40rem)"); // chamado o hook useMedia passando como parâmetro o tamanho máximo da tela do dispositivo e armazenando na variável mobile.
  const [mobileMenu, setMobileMenu] = React.useState(false); // Cria um estado chamado mobileMenu, e a função setMobileMenu para alterar o estado. O valor inicial do estado é false.

  const menuButton = useRef(null); // Cria uma referência para o botão do menu.

  function handleClick() {
    setMobileMenu(!mobileMenu); // Altera o estado do mobileMenu para o contrário do seu valor atual.
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
            onClick={handleClick}
          >
            <input type="checkbox" id={styles.checkboxMenu} />
            <label htmlFor="checkbox-menu" aria-label="Fechar e abrir o menu">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div
            className="containerNav"
            data-menu="smooth"
            aria-expanded="false"
          >
            <nav className={styles.nav}>
              <ul className={`${styles.list} ${mobileMenu ? styles.open : ""}`}>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
