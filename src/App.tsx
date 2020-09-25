import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { Footer, Header, Search } from "./components";
import { Bookmarks, Home, MovieDetails } from "./pages";
import { movies as mockMovies, categories as mockCategories } from "./mocks";
import { ICategory, IMovie } from "./types";
import {
  changeCategory,
  filterMoviesByTitle,
  updateMoviesByCategories,
} from "./utils";

interface IAppState {
  movies: IMovie[];
  categories: ICategory[];
}

const initialState: IAppState = {
  movies: mockMovies,
  categories: mockCategories,
};

export function App() {
  const [state, updateState] = useState<IAppState>(initialState);

  const { movies, categories } = state;

  function onCategoriesChanged(categoryName: string) {
    updateState({
      movies: updateMoviesByCategories(categoryName, mockMovies),
      categories: changeCategory(categoryName, categories),
    });
  }

  return (
    <>
      <Router>
        <Header>
          <Search></Search>
        </Header>
        <Switch>
          <Route
            path="/movies"
            exact={true}
            render={() => {
              return <Home onCategoriesChanged={onCategoriesChanged}></Home>;
            }}
          ></Route>

          <Route
            path="/movies/:movieId"
            render={(props: RouteComponentProps<{ movieId: string }>) => {
              const movieId = props.match.params.movieId;
              return <MovieDetails id={movieId}></MovieDetails>;
            }}
          ></Route>
          <Route path="/bookmark">
            <Bookmarks></Bookmarks>
          </Route>
          <Redirect from="/" to="/movies"></Redirect>
        </Switch>
      </Router>
      {/* Start: Footer Component */}
      <Footer>
        <div className="container mx-auto text-center">
          <p>Hackflix © 2020 Powered by Hackages</p>
        </div>
      </Footer>
      {/* End: Footer Component */}
    </>
  );
}
