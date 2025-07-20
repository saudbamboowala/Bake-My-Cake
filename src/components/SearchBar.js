import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for cakes, cookies, or brownies..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText && <button onClick={() => setSearchText("")}>Clear</button>}
    </div>
  );
};

export default SearchBar;
