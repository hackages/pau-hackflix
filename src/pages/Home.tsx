import React from "react";
import { ICategory, IMovie } from "../types";
import { MovieList, Filters } from "../components";

interface IHomeProps {
  movies: IMovie[];
  categories: ICategory[];
  onCategoriesChanged: (itemName: string) => void;
}

export function Home({ movies, categories, onCategoriesChanged }: IHomeProps) {
  return (
    <section className="wrapper">
      {/* Start: Filters Component */}
      <Filters
        items={categories}
        onItemsChanged={onCategoriesChanged}
      ></Filters>
      {/* End: Filters Component */}

      {/* Start: MovieList Component */}
      <MovieList movies={movies}></MovieList>
      {/* End: MovieList Component */}
    </section>
  );
}
