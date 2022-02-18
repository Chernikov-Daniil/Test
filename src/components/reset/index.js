import "./reset.css";

export const Reset = ({ onReset }) => {
  return (
    <div className="reset-box">
      <h2 className="reset-title">Your search did not match any results.</h2>
      <button className="reset-btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};
