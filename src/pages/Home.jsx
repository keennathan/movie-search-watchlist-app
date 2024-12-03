import React, { useState } from "react";

export default function Home() {
    const [query, setQuery] = useState("");

    const fetchMovies = async (e) => {
        const resopnse = await fetch(
            'http://www.omdbapi.com/?apikey=ae434685'
        )
    }

    return (
        <div>
            <h1>Movie Search</h1>
            <input 
            type="text" 
            placeholder="Search for Movies..." 
             />
            <button>Search</button>
        </div>
    );
}
