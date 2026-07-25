import styles from "./SplitSection.module.css";

function SplitSection({ children }) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}

export default SplitSection;