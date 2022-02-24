import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
      {movies.map((movie)=>
      <div key={movie.title}>
        Title: {movie.title}
        Time: {movie.time}
        <li>
          {movie.genres.map((genre)=>
          <ul key={genre}>
            {genre}
          </ul>)}
        </li>
      </div>)}
  </div>
  );
}

export default Movies;
