import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillFire } from "react-icons/ai";
import { BiSolidUpvote } from "react-icons/bi";

export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  original_name: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
}

const Card = ({ item }: { item: Movie }) => {
  return (
    <Link href={`/movie/${item.id}`}>
      <div
        key={item.id}
        className="flex flex-col justify-around gap-2 p-4 md:m-4 lg:m-4 lg:cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 group"
      >
        <h6 className="text-sm font-bold line-clamp-1">
          {item.title || item.original_name}
        </h6>
        <div className="flex gap-2">
          <div className="relative w-1/4 lg:w-1/3">
            <Image
              className="rounded-lg group-hover:opacity-75 transition duration-200 ease-in-out"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt="movie poster"
              width={90}
              height={100}
              blurDataURL="/Spinner.svg"
            />
          </div>
          <div className="text-start w-3/4 lg:2/3">
            <div className="text-xs flex items-center text-teal-600">
              <span>{item.release_date || item.first_air_date}</span>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-400 h-full line-clamp-4 lg:line-clamp-4">
                {item.overview}
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-2">
              <div className="text-xs font-thin flex items-center gap-1">
                <AiFillFire className="text-red-500" />
                <span>{Number(item.vote_average).toFixed(1)}/10</span>
              </div>
              <div className="text-xs flex items-center gap-1 font-thin">
                <BiSolidUpvote className="text-green-500" />
                <span>{item.vote_count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
