import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  console.log(location);
  const results = location.state.results;
  return results.map((r) => <div>{r.title}</div>);
};

export default SearchResults;
