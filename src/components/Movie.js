import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block cursor-pointer relative p-2 ml-8 z-120">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/50 opacity-0 hover:opacity-80 text-white duration-700">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}{" "}
        </p>
      </div>
    </div>
  );
};

export default Movie;
