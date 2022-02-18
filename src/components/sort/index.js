import "./sort.css";

export const Sort = ({ onSortName }) => {
  return (
    <ul className="sortList">
      <li className="sortList-item" onClick={onSortName}>
        name
      </li>
      <li className="sortList-item" onClick={() => {}}>
        type
      </li>
      <li className="sortList-item" onClick={() => {}}>
        status
      </li>
      <li className="sortList-item" onClick={() => {}}>
        site
      </li>
    </ul>
  );
};
