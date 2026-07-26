import { Link } from "react-router-dom";
import styles from "./Brand.module.css";

function Brand() {
  return (
    <Link to="/" className={styles.brand}>
      ANTIK SURF CLUB
    </Link>
  );
}

export default Brand;