import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 group sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="movie-img"
          className="sm:rounded-t-lg group-hover:opacity-80 transition duration-200 "
        />
        <div className="p-2">
          <p>{result.overview.substring(0, 60)} ...</p>
          <h2 className="text-lg font-bold text-center sm:text-left">
            {result.title || result.name}
          </h2>
          <p className="flex items-center justify-center md:justify-normal">
            {result.first_air_date || result.release_date}
            <AiFillHeart className="text-red-500 ml-3 mr-1" size={15} />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
