import React, { SyntheticEvent, useState } from "react";
import { movies } from "./mocks/movies";
import { categories } from "./mocks/categories";
import { IMovie } from "./types";
import { filterByTitle, filterByCategory } from "./utils";
import { Movie } from "./components/Movie";
import classnames from "classnames";

export function App() {
  return (
    <>
      {/* Start: Header Component */}
      <header class="py-10">
        <div class="container mx-auto">
          <div class="sm:flex items-center justify-between">
            <a
              href="/"
              class="logo lg:w-1/2 sm:w-1/4 w-full block mb-5 sm:mb-0"
            >
              <img
                class="mx-auto sm:mx-0"
                src="./image/logo.svg"
                alt="hackflix"
              />
            </a>
            <div class="flex justify-center sm:justify-end items-center text-right lg:w-1/2 sm:w-3/4 w-full">
              {/* Start: Search Component */}
              <form class="flex mr-5 lg:mr-10">
                <input
                  type="text"
                  name="Search"
                  placeholder="Search"
                  class="search"
                  onChange={() => {}}
                />
                <button type="submit" class="search-btn">
                  <img src="./image/search.svg" alt="search" />
                </button>
              </form>
              {/* End: Search Component */}

              <div class="nav">
                <a href="/bookmarks" className="bookmark-nav py-3 mr-5">
                  Bookmarks
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End: Header Component */}

      <section className="wrapper">
        {/* Start: Filters Component */}
        <div className="categories">
          <div className="container mx-auto text-center">
            <ul className="flex flex-row justify-center categories-list">
              {[].map((filter) => {
                const style = classnames({
                  "px-3 md:px-6 py-3 block": true,
                  active: filter.selected,
                });
                return (
                  <li key={filter.name} onClick={() => {}}>
                    <a className={style} href="#">
                      {filter.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* End: Filters Component */}

        {/* Start: MovieList Component */}
        <div className="movie-list py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
              {[].map((movie) => (
                <Movie movie={movie} />
              ))}
            </div>
          </div>
        </div>
        {/* End: MovieList Component */}
      </section>

      {/* Start: Footer Component */}
      <footer className="py-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <p>Hackflix © 2020 Powered by Hackages</p>
        </div>
      </footer>
      {/* End: Footer Component */}
    </>
  );
}
