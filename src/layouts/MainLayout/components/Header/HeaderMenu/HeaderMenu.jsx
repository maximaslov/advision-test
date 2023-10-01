import styles from "./HeaderMenu.module.css";
import HeaderMenuItem from "./HeaderMenuItem";
import { items } from "./headerMenuItemsDefinitions";

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      {items.map((item, index) => (
        <HeaderMenuItem item={item} key={index} />
      ))}
    </div>
  );
};

export default HeaderMenu;
