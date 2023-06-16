import React from "react";
import "./Main.css";
import { Search, CountryCard } from "../../Components";

export default function Main() {
  return (
    <>
      <main>
        <Search />
        <div className="container">
          <CountryCard />
          <CountryCard />
        </div>
      </main>
    </>
  );
}
