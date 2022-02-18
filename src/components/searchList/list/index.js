import "../searchList.css";

export const List = ({ list }) => {
  const handleColorChange = (status) => {
    switch (status) {
      case "ONLINE":
        return "#1BDA9D";
      case "PAUSED":
        return "#FF8346";
      case "DRAFT":
        return "#5C5C5C";
      case "STOPPED":
        return "#FE4848";
      default:
        return "black";
    }
  };

  const handleIndicator = (indicator) => {
    switch (indicator) {
      case "market.company.com":
        return "#E14165";
      case "delivery.company.com":
        return "#C2C2FF";
      case "games.company.com":
        return "#8686FF";
      default:
        return "none";
    }
  };
  return (
    <>
      <ul className="list">
        <li
          className="indicator"
          style={{ backgroundColor: handleIndicator(list.url) }}
        ></li>
        <li className="list-item name">{list.name}</li>
        <li className="list-item type">{list.type}</li>
        <li
          className="list-item status"
          style={{ color: handleColorChange(list.status) }}
        >
          {list.status}
        </li>
        <li className="list-item site">{list.url}</li>
        <li
          className="result"
          style={{
            backgroundColor: list.status === "DRAFT" ? "#7D7D7D" : "#2EE5AC",
          }}
        >
          {list.status === "DRAFT" ? "Finalize" : "Results"}
        </li>
      </ul>
    </>
  );
};
