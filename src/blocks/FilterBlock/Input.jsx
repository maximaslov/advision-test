import Close from "../../components/icons/Close";
import styles from "./FilterBlock.module.css";

const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} type="text" placeholder="Search by name"/>
      <Close />
      <div className={styles.inputBackground} />
    </div>
  );
};

export default Input;
