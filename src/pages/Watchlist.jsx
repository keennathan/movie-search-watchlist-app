import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

const Watchlist = () => {
    // Fetch two out of three returns from the custom hook
    const { watchlist, removeFromWatchlist } = useWatchlist();

    return (
        <div>
            <h2>Your Watchlist</h2>
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty. Start adding some movies!</p>
            ) : (
                <ul>
                    {watchlist.map((movie) => (
                        <li key={movie.imdbID}>
                            <strong>{movie.Title}</strong> ({movie.Year})
                            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                            <button
                                onClick={() => removeFromWatchlist(movie.imdbID)}
                                style={{ color: 'red' }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )
            }
            <Link to={'/'}>Back to Movies</Link>
        </div>
    )

}

export default Watchlist;