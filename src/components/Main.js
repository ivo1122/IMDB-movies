import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import requests from "../Requests";
import Navbar from "./Navbar";


const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);




  return (
    <div className='w-full h-[850px] text-white bg-white'>
      <Navbar/>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[850px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
          alt={movie?.title}
        />
        <div className='absolute w-full top-[50%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-7xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-3 px-5'>
              Play
            </button>
            <button className='border text-white border-gray-300 py-3 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-l mb-5">
            Released : {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white">
            {movie?.overview}
          </p>

        </div>
      </div>
    </div>
  );
};

export default Main;
