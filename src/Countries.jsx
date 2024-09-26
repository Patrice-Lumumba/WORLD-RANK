// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import axios from "axios";
// import Card from "./Card.jsx";
// import Card from "./Card";
import './index.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
                // setLoading(false);
                console.log(response.data)
            } catch (error) {
                console.log("Erreur")
            }
        };

        fetchCountries();
    }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error loading countries!</p>;

    return (
        <div>
            <h1 className={"text-3xl font-bold underline"}>Countries of the World</h1>
            {/*<ul>*/}
            {/*    /!*<img*!/*/}
            {/*    /!*    className="card-img"*!/*/}
            {/*    /!*    src={country.flags.svg}*!/*/}
            {/*    /!*    alt={"drapeau " + country.translations.fra.common}*!/*/}
            {/*/>*/}
            {/*    */}

            {/*    {countries.map((country) => (*/}
            {/*        <li key={country.cca3}>*/}
            {/*            {country.name.common}: {country.capital} - {country.region}*/}
            {/*        </li>*/}


            {/*    ))}*/}
            {/*</ul>*/}

            <table className="border-collapse border border-slate-500 ...">
                <thead>
                <tr>
                    <th className="border border-b-amber-600 ...">Flag</th>
                    <th className="border border-slate-600 ...">Name</th>
                    <th className="border border-slate-600 ...">Population</th>
                    <th className="border border-slate-600 ...">Areas (km²)</th>
                    <th className="border border-slate-600 ...">Continent</th>
                </tr>
                </thead>
                <tbody>

                {countries.map(country => (
                    <tr key={country.cca3}>
                        <td>
                            <img
                                src={country.flags.svg}
                                alt={"drapeau " + country.translations.fra.common}
                                width={50}
                            />
                        </td>
                        <td>{country.name.common}</td>
                        <td>{country.population.toLocaleString()}</td>
                        <td>{country.area}</td>
                        <td>{country.continents}</td>

                    </tr>
                ))}

                </tbody>
            </table>

        </div>
    );
};


export default Countries;