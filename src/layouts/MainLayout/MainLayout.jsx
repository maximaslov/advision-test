import { useState } from "react";
import styles from "./MainLayout.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={styles.mainLayout}>
      <Header setOpenSidebar={setOpenSidebar} isOpenSidebar={isOpenSidebar} />
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
