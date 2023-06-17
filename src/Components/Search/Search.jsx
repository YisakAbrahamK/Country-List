import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <>
      <div className="wrapper">
        <input
          type="search"
          placeholder="Search Country"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </div>
    </>
  );
}
