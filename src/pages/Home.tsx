import React from "react";
import { ICategory, IMovie } from "../types";
import { MovieList, Filters } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface IHomeProps {
  movies: IMovie[];
  categories: ICategory[];
  onCategoriesChanged: (itemName: string) => void;
}

export function Home({ onCategoriesChanged }: IHomeProps) {
  const categories = useSelector(
    (state: RootState) => state.categoriesReducer.categories
  );
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);
  return (
    <section className="wrapper">
      {/* Start: Filters Component */}
      <Filters items={categories}></Filters>
      {/* End: Filters Component */}

      {/* Start: MovieList Component */}
      <MovieList movies={movies}></MovieList>
      {/* End: MovieList Component */}
    </section>
  );
}
