import Statistic from "../Statistic/Statistic";

const DevicesTopBlock = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        zIndex: 0,
        pointerEvents: "auto",
      }}
    >
      <Statistic />
      <div style={{ minWidth: "580px", height: "360px", background: "#fff" }} />
    </div>
  );
};

export default DevicesTopBlock;
