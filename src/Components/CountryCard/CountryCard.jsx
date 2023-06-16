import React from "react";
import Styles from "./CountryCard.module.css";

export default function CountryCard() {
  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.flag}>
          <img src="https://restcountries.eu/data/afg.svg" alt="flag" />
        </div>
        <div className={Styles.details}>
          <h2>Afghanistan</h2>
          <p>
            <strong>Population:</strong> 27657145
          </p>
          <p>
            <strong>Region:</strong> Asia
          </p>
          <p>
            <strong>Capital:</strong> Kabul
          </p>
        </div>
      </div>
    </>
  );
}
