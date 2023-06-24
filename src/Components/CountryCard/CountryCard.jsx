import Styles from "./CountryCard.module.css";

export default function CountryCard(props) {
  return (
    <>
      <a href="">
        <div className={Styles.card}>
          <div className={Styles.flag}>
            <img src={props.country.flags.png} alt="flag" />
          </div>
          <div className={Styles.details}>
            <h2>{props.country.name.common}</h2>
            <p>
              <strong>Population:</strong>{" "}
              {props.country.population.toLocaleString()}
            </p>
            <p>
              <strong>Region:</strong> {props.country.region}
            </p>
            <p>
              <strong>Capital:</strong> {props.country.capital}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
