import { ShoppingCart } from "lucide-react";
import styles from "./CartButton.module.css";

function CartButton() {
  return (
    <button 
      className={styles.cartButton}
      aria-label="Open shopping cart"
    >
      <ShoppingCart size={24} />
    </button>
  );
}

export default CartButton;