import Image from "next/image";
import React from "react";

const API_KEY = process.env.API_KEY;

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return await res.json();
};

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="relative w-full p-4 flex flex-col mx-auto md:flex-row items-center content-center md:space-x-6">
      <Image
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/original${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="movie poster"
        width={500}
        height={300}
        placeholder="blur"
        blurDataURL="/Spinner.svg"
      />
      <div>
        <h2 className="text-lg font-bold my-3">{movie.title || movie.name}</h2>
        <p className="my-2">
          <span className="font-semibold mr-2">Overview:</span>
          {movie.overview}
        </p>
        <p className="mt-4">
          <span className="font-semibold mr-2">Release Date:</span>
          {movie.release_date || movie.first_air_date}
        </p>
        <p className="mt-4">
          <span className="font-semibold mr-2">Rating:</span>
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default MoviePage;
