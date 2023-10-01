import styles from './Sidebar.module.css'
import SidebarMenu from './SidebarMenu/SidebarMenu'
import UserInfo from './UserInfo/UserInfo'

const Sidebar = () => {
    return <div className={styles.sidebarWrapper}>
        <UserInfo />
        <SidebarMenu />
    </div>
}

export default Sidebar