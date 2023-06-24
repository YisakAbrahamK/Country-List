import React, { useEffect } from "react";
import styles from "./CountryDetail.module.css";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const { name } = useParams();

  useEffect(() => {
    getCountry(name).then((data) => console.log(data));
  }, []);

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default CountryDetail;

const getCountry = async (name) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=false`
  );
  const data = await response.json();
  return data;
};
