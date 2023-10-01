import styles from '../Statistic.module.css'

const StatisticItem = ({ title, Icon, description }) => {

  return (
    <div
      className={styles.statisticItem}
      style={{
        display: "flex",
        padding: "10px",
        flexDirection: "column",
        background: "white",
        maxWidth: "155px",
        height: "88px",
        cursor: "pointer",
        width: "100%",
        gap: "14px",
        ":hover": {
          background: "red",
        },
      }}
    >
      <p style={{ fontSize: "17px", fontWeight: "300" }}>{title}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <Icon />
        <p style={{ fontSize: "15px", color: "#8A8A8A", fontWeight: "400" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatisticItem;
