import { NavLink } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
import logo from "../header/assets/logo-ejemplo.png";
import burgerIcon from "../navbar/assets/burgerIcon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Navbar = () => {
  return (
    <nav className={`${styles.navBar} navbar navbar-expand-lg`}>
      <div className="container-fluid container-lg">
        <NavLink to="/" className="nav-link">
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={burgerIcon} alt="burgerIcon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-center">
            <li className={`${styles.navItem} nav-item text-center my-3`}>
              <NavLink to="/" className={`${styles.navLink}`}>
                Inicio
              </NavLink>
            </li>
            <li className={`${styles.navItem} nav-item text-center my-3`}>
              <NavLink to="/servicios" className={`${styles.navLink}`}>
                Servicios
              </NavLink>
            </li>
            <li className={`${styles.navItem} nav-item text-center my-3`}>
              <NavLink to="/contacto" className={`${styles.navLink}`}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
