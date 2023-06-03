import React from "react";
function Movie(props) {
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
        alt={props.movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <p className="movie-title">{props.movie.original_title}</p>
        <p className="movie-date">
            <small>{props.movie.release_date}</small>
        </p>
        <p className="movie-describtion">{props.movie.overview}</p>
      </div>
    </div>
  );
}
export default Movie;
