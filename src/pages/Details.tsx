import React from "react";

export function MovieDetails(props: { id: string }) {
  return (
    <section className="wrapper">
      <div className="movie-list py-20">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="details-image mr-5">
              <img src="../image/movie01.png" alt="Movie Title" />
            </div>
            <div className="details-content ml-5">
              <h1 className="mb-5">Captain America (2020)</h1>
              <p className="small opacity-75 mb-5">
                A young Chinese maiden disguises herself as a male warrior in
                order to save her father.
              </p>
              <p className="mb-5">Action / Adventure / Drama / Family</p>
              <button className="download">Download</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
