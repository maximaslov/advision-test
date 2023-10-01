import IconButton from "../../../../ui/IconButton/IconButton";
import styles from "./Header.module.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <IconButton variant="primary" icon="Menu" />
      <HeaderMenu />
    </header>
  );
};

export default Header;
