import icons from "../../components/icons";
import styles from "./IconButton.module.css";

const IconButton = ({
  icon,
  variant,
  text,
  size,
  iconColor,
  isActive,
  onClick,
}) => {
  const currentWrapperClassName = {
    primary: styles.primaryWrapper,
    round: styles.roundWrapper,
    square: styles.squareWrapper,
  };
  const CurrentIcon = icons[icon];

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={currentWrapperClassName[variant]}
      style={{
        ...(size && { width: size, height: size }),
        ...(isActive && { background: iconColor }),
      }}
    >
      <CurrentIcon color={isActive ? "white" : iconColor} />
      {text && <p className={styles.IconButtonText}>{text}</p>}
    </div>
  );
};

export default IconButton;
