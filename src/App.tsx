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
export function App() {
  function searchHandler() {}
  return (
    <>
      <Router>
        <Header>
          <Search searchHandler={searchHandler}></Search>
        </Header>
        <Switch>
          <Redirect from="/" to="/movies"></Redirect>
          <Route path="/movies" component={Home}></Route>
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
