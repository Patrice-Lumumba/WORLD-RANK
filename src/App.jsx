import {useEffect, useState} from 'react'

import './index.css';
import axios from "axios";
import Countries from "./Countries.jsx";
import Home from "./Home/Home.jsx";

function App() {
    // const [count, setCount] = useState(0)

    const [data, setData] = useState([]);
    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => {
                setData(res.data)
            })
    }, [])

    return (
        <>
            <Countries/>
            <Home/>

        </>
    )
}

export default App
