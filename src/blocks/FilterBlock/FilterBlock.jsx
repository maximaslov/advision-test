import { useState } from "react";
import Button from "../../ui/Button/Button";
import IconButton from "../../ui/IconButton/IconButton";
import Input from "./Input";

const FilterBlock = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const iconButtons = [{ icon: "ListUl" }, { icon: "Strings" }];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        pointerEvents: "auto",
        marginTop: "14px",
      }}
    >
      <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <IconButton variant="square" icon="List" />
          <IconButton variant="square" icon="Refresh" />
        </div>
        <input
          type="checkbox"
          style={{ width: "16px", height: "16px", cursor: "pointer" }}
        />
        <Input />
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <Button variant="secondary">Create</Button>
        {iconButtons.map(({ icon }, index) => (
          <IconButton
            onClick={() => setActiveIndex(index)}
            key={index}
            variant="square"
            size="30px"
            icon={icon}
            iconColor="#4A94EB"
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBlock;
