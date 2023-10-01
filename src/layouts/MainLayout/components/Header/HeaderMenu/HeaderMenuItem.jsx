import Arrow from "../../../../../components/icons/Arrow";
import IconButton from "../../../../../ui/IconButton/IconButton";
import styles from "./HeaderMenu.module.css";

const HeaderMenuItem = ({ item }) => {
  const { icon, variant, text } = item;
  return (
    <div className={styles.headerMenuItem}>
      {icon && <IconButton icon={icon} variant={variant} />}
      {text && <p className={styles.headerMenuItemText}>{text}</p>}
      <Arrow />
    </div>
  );
};

export default HeaderMenuItem;
