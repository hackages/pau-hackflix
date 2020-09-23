import { genres as mockGenres } from "../mocks/genres";
import { IGenre, IMovie } from "../types";
export const getGenreName = (id: number, genres: IGenre[] = mockGenres) =>
  genres
    .filter((genre) => genre.id === id)
    .map(({ name }) => name)
    .join("");
export const getGenreId = (name: string, genres = mockGenres) =>
  parseInt(
    genres
      .filter((genre) => genre.name === name)
      .map(({ id }) => id)
      .join(""),
    10
  );

export const movieContainsGenre = (movie: IMovie, genre_id: number) =>
  movie.genre_ids.reduce(
    (contains, next) => (contains ? contains : next === genre_id),
    false
  );

export const filterMoviesByCat = (movies: IMovie[], genre_id: number) =>
  movies.filter((movie) => movieContainsGenre(movie, genre_id));

export const getPopularFilters = (genres: IGenre[], movies: IMovie[]) =>
  genres
    .map(({ id }) => id)
    .map((id) => ({
      name: getGenreName(id),
      movies: filterMoviesByCat(movies, id),
    }))
    .sort((a, b) => b.movies.length - a.movies.length)
    .map(({ name }) => name)
    .map((category) => ({
      category,
      selected: false,
    }))
    .slice(0, 5)
    .reduce((genres, nextGenre) => [...genres, nextGenre], [
      { category: "All", selected: true },
    ]);

export const filterByCategory = (movie: IMovie, categoryName: string) =>
  categoryName === "All" || movieContainsGenre(movie, getGenreId(categoryName));

export const filterByTitle = (movie: IMovie, title: string) =>
  movie.title.toLowerCase().includes(title.trim().toLowerCase());
