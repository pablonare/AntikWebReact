import Container from "../../ui/Container/Container";
import Logo from "../../../assets/images/common/logo-antik.png";
import styles from "./Footer.module.css";


function Footer() {
    return (
        <footer className={styles.footer}>

            <img
                className={styles.backgroundLogo}
                src={Logo}
                alt=""
                aria-hidden="true"
            />

            <Container>

                <div className={styles.content}>

                    <nav className={styles.navigation}>
                        <h3 className={styles.heading}>Explore</h3>
                        {/* enlaces */}
                    </nav>

                    <section className={styles.contact}>
                        <h3 className={styles.heading}>Contact</h3>

                        <a href="mailto:antiksurfclub@gmail.com">
                            antiksurfclub@gmail.com
                        </a>

                        <a href="https://wa.me/212644078565">
                            +212 644 078565
                        </a>

                        <a
                            href="https://instagram.com/antiksurfclub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @antiksurfclub
                        </a>
                    </section>

                    <address className={styles.location}>
                        <h3 className={styles.heading}>Location</h3>

                        <p>Asilah, Morocco</p>
                    </address>
              </div>

                <div className={styles.bottom}>
                    <p>© 2026 Antik Surf Club</p>
                </div>

            </Container>

        </footer>
    );
}

export default Footer;