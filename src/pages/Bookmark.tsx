import React from "react";
import { Filters } from "../components/Filters";
import { categories } from "../mocks/categories";

export function Bookmarks() {
  function filterCategory() {}
  return (
    <section className="wrapper">
      <Filters onChange={filterCategory} filters={categories}></Filters>
      <div className="movie-list py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
            <div className="single-movie-wrapper">
              <div className="single-movie relative">
                <img
                  className="w-full"
                  src="./image/movie01.png"
                  alt="Movie Name"
                />
                <div className="movie-content flex items-center justify-center items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                  <div className="content-inner">
                    <h3 className="mb-5">Captain America</h3>
                    <a
                      href="movie-details.html"
                      className="details-btn inline-block"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <button className="remove-bookmark block text-center py-2 mt-4 w-full">
                Remove Bookmark
              </button>
            </div>

            <div className="single-movie-wrapper">
              <div className="single-movie relative">
                <img
                  className="w-full"
                  src="./image/movie01.png"
                  alt="Movie Name"
                />
                <div className="movie-content flex items-center justify-center items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                  <div className="content-inner">
                    <h3 className="mb-5">Captain America</h3>
                    <a
                      href="movie-details.html"
                      className="details-btn inline-block"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <button className="remove-bookmark block text-center py-2 mt-4 w-full">
                Remove Bookmark
              </button>
            </div>

            <div className="single-movie-wrapper">
              <div className="single-movie relative">
                <img
                  className="w-full"
                  src="./image/movie01.png"
                  alt="Movie Name"
                />
                <div className="movie-content flex items-center justify-center items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                  <div className="content-inner">
                    <h3 className="mb-5">Captain America</h3>
                    <a
                      href="movie-details.html"
                      className="details-btn inline-block"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <button className="remove-bookmark block text-center py-2 mt-4 w-full">
                Remove Bookmark
              </button>
            </div>

            <div className="single-movie-wrapper">
              <div className="single-movie relative">
                <img
                  className="w-full"
                  src="./image/movie01.png"
                  alt="Movie Name"
                />
                <div className="movie-content flex items-center justify-center items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                  <div className="content-inner">
                    <h3 className="mb-5">Captain America</h3>
                    <a
                      href="movie-details.html"
                      className="details-btn inline-block"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <button className="remove-bookmark block text-center py-2 mt-4 w-full">
                Remove Bookmark
              </button>
            </div>

            <div className="single-movie-wrapper">
              <div className="single-movie relative">
                <img
                  className="w-full"
                  src="./image/movie01.png"
                  alt="Movie Name"
                />
                <div className="movie-content flex items-center justify-center items-center justify-center text-center absolute w-full h-full inset-0 px-4">
                  <div className="content-inner">
                    <h3 className="mb-5">Captain America</h3>
                    <a
                      href="movie-details.html"
                      className="details-btn inline-block"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <button className="remove-bookmark block text-center py-2 mt-4 w-full">
                Remove Bookmark
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
