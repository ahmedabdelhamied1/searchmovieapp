import React, { useState } from "react";
import Movie from "./Movie";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  function handleChange(event) {
    setQuery(event.target.value);
  }
  async function searchMovies(event) {
    event.preventDefault();
    console.log("submitting");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJjYzkwMzdkYjU2NjZhOWIxZjJlMGVmMzJjNzQxZSIsInN1YiI6IjY0NzYzMzYwNjc0M2ZhMDBmY2RiMGJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HMo8ebXMMEVWWRpGGGTW7rrzKpGEGwzqrSNTFZkPZR4",
      },
    };
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      console.log(movies);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          name="query"
          type="text"
          placeholder="i.e. the revenant "
          value={query}
          onChange={handleChange}
        />
        <button className="button">Search</button>
      </form>
      <div>
        <div className="movies-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </>
  );
}

export default SearchMovies;
