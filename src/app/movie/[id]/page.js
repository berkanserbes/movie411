import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:max-w-[926]:flex-row items-center content-center mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          alt={data.title || data.original_title}
          className="rounded-lg"
        />
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-3 text-center">
            {data.title || data.name}
          </h2>
          <p className="mb-3 text-lg">
            <span className="font-semibold mr-1">Overview: </span>
            {data.overview}
          </p>
          <p className="p-2">
            <span className="font-semibold mr-1">Released Date: </span>
            {data.first_air_date || data.release_date}
          </p>
          <p className="flex items-center p-2">
            <span className="font-semibold mr-1">Rating: </span>
            <AiFillHeart className="text-red-500 ml-3 mr-1" />
            {data.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
