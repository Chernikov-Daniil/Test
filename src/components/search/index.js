import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import "./search.css";
import { SearchList } from "../searchList";
import icon from "../../utils/img/search.svg";
import { Reset } from "../reset";

const delay = 400;

export const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [filter, setFilter] = useState("");
  const [number, setNumber] = useState();
  const debouncedSetFilter = useDebouncedCallback(
    (filter) => setFilter(filter),
    delay
  );

  const handleChange = (e) => {
    setSearchString(e.target.value);
    debouncedSetFilter(e.target.value);
  };

  const handleGetNumber = (value) => {
    setNumber(value);
  };

  const handleReset = () => {
    setSearchString("");
    setFilter("");
  };

  return (
    <>
      <h1 className="title">Dashboard</h1>
      <div className="wrp-search">
        <div className="icon">
          <img className="icon-svg" src={icon} />
        </div>
        <input
          type="text"
          className="search"
          value={searchString}
          onChange={handleChange}
          placeholder="What test are you looking for?"
        />
        <div className="number">
          <span className="number-txt">{number} tests</span>
        </div>
      </div>
      {filter.length !== 0 && number === 0 ? (
        <Reset onReset={handleReset} />
      ) : (
        <SearchList filter={filter} onGetNumber={handleGetNumber} />
      )}
    </>
  );
};
