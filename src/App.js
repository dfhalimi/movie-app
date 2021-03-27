import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";
import Details from "./components/Details";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/details/:info">
        <Details />
      </Route>
      <Route path="/search/:searchterm">
        <SearchResults />
      </Route>
    </Router>
  );
}

export default App;
