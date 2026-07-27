import { useEffect, useState } from "react";
import styles from "./MobileMenu.module.css";
import MenuIcon from "../../ui/Icon/MenuIcon";
import CloseIcon from "../../ui/Icon/CloseIcon";
import Brand from "../../ui/Brand/Brand"; // ajusta la ruta

import { Link } from "react-router-dom";

function MobileMenu() {

  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {

    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";


    return () => {
      document.body.style.overflow = "auto";
    };

  }, [isOpen]);


  return (
    <div className={styles.wrapper}>


      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>


      {isOpen && (
        <div
          className={`${styles.overlay} ${
            isOpen ? styles.overlayVisible : ""
          }`}
          onClick={() => setIsOpen(false)}
        />
      )}


      <aside
        className={`${styles.menu} ${
          isOpen ? styles.open : ""
        }`}
      >

        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>


        <div className={styles.menuBrand}>
            <Brand />
        </div>

        <nav className={styles.navigation}>

          <Link to="/">
            Home <span className="nav__subtitle">| Lessons & Rentals</span>
          </Link>
         
          <Link to="/surftrips">Trips</Link>

          <a href="/shop">
            Shop
          </a>

        </nav>


      </aside>


    </div>
  );
}

export default MobileMenu;