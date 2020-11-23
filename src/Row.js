import React, { useState, useEffect } from 'react';
import axios from './axios'
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    //A snippet which runs based on specific condition/variable
    useEffect(() => {
        //if [] , run once when the row loads 
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return ( <
        div className = "row" >
        <
        h2 > { title } < /h2> <
        div className = "row__poster" > { /* row__poster */ } {
            movies.map(movie => ( <
                img className = "row__poster"
                src = { `${base_url}${movie.poster_path}` }
                alt = { movie.name }
                />
            ))
        } <
        /div>

        <
        /div>
    )
}

export default Row