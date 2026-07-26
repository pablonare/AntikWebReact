import styles from "./Button.module.css";

function Button({
  children,
  href,
  variant = "primary",
  size = "medium",
}) {
  const className = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
  `;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;