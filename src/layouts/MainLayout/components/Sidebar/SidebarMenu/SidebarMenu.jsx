import { useState } from "react";
import styles from "./SidebarMenu.module.css";
import { sidebarItems } from "./sidebarMenuDefinitions";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.sidebarMenu}>
      {sidebarItems.map((item, index) => (
        <SidebarMenuItem
          key={index}
          onClick={() => handleClick(index)}
          isActive={index === activeIndex}
          {...item}
        />
      ))}
    </div>
  );
};

export default SidebarMenu;
