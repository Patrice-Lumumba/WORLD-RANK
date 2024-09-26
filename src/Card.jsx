// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({country}) => {
    return (
        <div className="container-fluid py-3 d-inline-flex">
        <li className="card">
            <img
                className="card-img"
                src={country.flags.svg}
                alt={"drapeau " + country.translations.fra.common}
            />
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                <p>Pop. {country.population}</p>

            </div>
        </li>
        </div>
    );
};

export default Card;