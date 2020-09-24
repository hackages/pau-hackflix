import React, { useState } from "react";
import { movies as mockMovies, categories as mockCategories } from "../mocks";
import { ICategory, IMovie } from "../types";
import {
  updateMoviesByCategories,
  changeCategory,
  filterMoviesByTitle,
} from "../utils";
import { Movie, Footer, Header, MovieList, Search } from "../components";

import { Filters } from "../components";

interface IAppState {
  movies: IMovie[];
  categories: ICategory[];
}

const initialState: IAppState = {
  movies: mockMovies,
  categories: mockCategories,
};

export function Home() {
  const [state, updateState] = useState<IAppState>(initialState);
  const { movies, categories } = state;

  function onCategoriesChanged(categoryName: string) {
    updateState({
      movies: updateMoviesByCategories(categoryName, mockMovies),
      categories: changeCategory(categoryName, categories),
    });
  }

  function searchMovies(value: string) {
    updateState({ ...state, movies: filterMoviesByTitle(value, mockMovies) });
  }

  return (
    <>
      {/* Start: Header Component */}
      <Header>
        <Search searchHandler={searchMovies}></Search>
      </Header>
      {/* End: Header Component */}

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
    </>
  );
}
