import React from "react";
import { IMovie } from "../types";

interface IMovieProps {
  movie: IMovie;
}
export function Movie({ movie }: IMovieProps) {
  return (
    <div key={movie.id} className="single-movie relative">
      <img src={movie.poster_path} alt={movie.original_title} />
      <div className="movie-content flex items-center justify-center items-center justify-center text-center absolute w-full h-full inset-0 px-4">
        <div className="content-inner">
          <div className="bookmark p-1 inline-block absolute">Bookmark</div>
          <h3 className="mb-5">{movie.title}</h3>
          <a href={`/movies/${movie.id}`} className="details-btn inline-block">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
