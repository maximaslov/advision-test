import styles from './UserInfo.module.css'
import image from "./img/Ellipse.png";

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <img src={image} alt="user" />
      <div className={styles.userInfoText}>
         <p className={styles.userNickName}>user</p>
         <p className={styles.userRole}>Owner</p>
      </div>
    </div>
  );
};

export default UserInfo;
