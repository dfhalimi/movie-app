import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const clickSearch = () => {
  if (!document.getElementById("search").classList.contains("clickSearch")) {
    document.getElementById("search").classList.add("clickSearch");
  } else {
    document.getElementById("search").classList.remove("clickSearch");
  }
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      history.push("/search/" + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-box">
      {/*<header>
      <Link to="/">Home</Link>*/}
      <form onSubmit={handleOnSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
          id="search"
        />
        <button onClick={clickSearch}>
          <i className="fas fa-search"></i>
        </button>
      </form>

      {/*</header>*/}
    </div>
  );
};

export default Navbar;
