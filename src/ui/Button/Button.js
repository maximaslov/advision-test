import styles from "./Button.module.css";

const Button = ({ variant, children }) => {
  const classes = {
    primary: styles.primary,
    secondary: styles.secondary,
  };
  return <button className={classes[variant]}>{children}</button>;
};

export default Button;
