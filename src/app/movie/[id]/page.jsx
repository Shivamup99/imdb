import Image from 'next/image';
import React from 'react'

async function getMovieId(mid){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${mid}?api_key=${process.env.API_KEY}`);
    return await res.json();
}

export default async function page({params}) {
    const movieId = params.id
    const movie = await getMovieId(movieId);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex items-center flex-col md:flex-row content-center max-w-7xl mx-auto md:space-x-6">
        <Image
          width={500}
          height={400}
          className="rounded-t-lg shadow-md group-hover:opacity-80 transition-opacity duration-200"
          src={`https://image.tmdb.org/t/p/original${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt="sdshiahsi"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie?.title}</h2>
          <p>
            <span className="font-semibold mr-1 ">Overview:</span>
            {movie?.overview}
          </p>
          <p className="mb-3 mt-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie?.release_date}
          </p>
          <p className="">
            <span className="font-semibold mr-1">Rating:</span>
            {movie?.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
