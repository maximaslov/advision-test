import IconButton from "../../../../../ui/IconButton/IconButton";
import styles from "./SidebarMenu.module.css";

const SidebarMenuItem = ({ icon, text, isActive, onClick }) => {
  return (
    <div
      className={isActive ? styles.sidebarItemActive : styles.sidebarItem}
      onClick={onClick}
    >
      <IconButton icon={icon} text={text} variant="primary" />
    </div>
  );
};

export default SidebarMenuItem;
