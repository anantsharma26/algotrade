import React from "react";
import "./search.css";

const Search = ({ placeholder }) => {
  return (
    <div className="searchbar">
      <form action="">
        <input type="text" className="search" placeholder={placeholder} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Search;
