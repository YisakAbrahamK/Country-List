import React, { useEffect, useState } from "react";
import "./Main.css";
import { Search, CountryCard } from "../../Components";

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    if (search !== "") return;
    fetch("https://restcountries.com/v3.1/all", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let countriesJSON = sortJSONArray(JSON.parse(result));
        setCountries(countriesJSON);
      })
      .catch((error) => console.log("error", error));
  }, [search]);

  useEffect(() => {
    if (search === "") return;
    fetch(`https://restcountries.com/v3.1/name/${search}`, requestOptions)
      .then((response) => response.text())
      .then((result) => setCountries(sortJSONArray(JSON.parse(result))))
      .catch((error) => console.log("error", error));
  }, [search]);

  console.log(countries);
  return (
    <>
      <main>
        <Search setSearch={setSearch} search={search} />
        <div className="container">
          {Array.isArray(countries) ? (
            countries.map((country) => {
              return (
                <CountryCard key={crypto.randomUUID()} country={country} />
              );
            })
          ) : (
            <h1>Found nothing</h1>
          )}
        </div>
      </main>
    </>
  );
}

function sortJSONArray(array) {
  if (!Array.isArray(array)) return;
  return array.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    } else if (a.name.common > b.name.common) {
      return 1;
    } else {
      return 0;
    }
  });
}
