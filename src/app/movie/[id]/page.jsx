import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import dayjs from "dayjs";
import {AiOutlineStar} from 'react-icons/ai'
async function getMovieId(mid){
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${mid}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits,videos`
    );
    return await res.json();
}


export default async function page({ params }) {
  const movieId = params.id;
  const movie = await getMovieId(movieId);
//   console.log('shh',movie)
    const toHoursAndMinutes = (totalMinutes) => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
     const director = movie?.credits?.crew?.filter((f) => f.job === "Director");
    //  console.log(director)
     const writer = movie?.credits?.crew?.filter(
       (f) => f.job === "Screenplay" || f.job === "Writer" || f.job === "Story"
     );
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
          style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="p-2">
          {movie?.genres?.slice(0, 6).map((g) => (
            <span
              key={g.id}
              class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400"
            >
              {g.name}
            </span>
          ))}

          <div className="text-2xl mb-3 font-bold flex items-center justify-between mr-24">
            <p className="flex flex-col">
              {movie?.title}
              <span
                title={movie?.tagline}
                className="text-sm font-normal truncate w-[600px] text-gray-700"
              >
                {movie?.tagline}
              </span>
            </p>

            <p className="bg-gray-100 text-red-800   border-solid border-4 border-green-600 rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm">
              {movie?.vote_average.toFixed(1)}
              <AiOutlineStar className="ml-1 font-bold" />
            </p>
          </div>

          <p>
            <span className="font-semibold mr-1 ">Overview:</span>
            {movie?.overview}
          </p>
          <div className="flex mt-2 items-center justify-between">
            <p className="">
              <span className="font-semibold mr-1">Date Released:</span>
              {dayjs(movie?.release_date).format("MMM D, YYYY")}
            </p>
            <p>
              <span className="font-semibold mr-1">Runtime:</span>
              {toHoursAndMinutes(movie?.runtime)}
            </p>
            <p className="">
              <span className="font-semibold mr-1">Vote Count:</span>
              {movie?.vote_count}
            </p>
          </div>
          <div className='mt-2'>
            {director?.length > 0 && (
              <div className="info">
                <span className="font-semibold mr-1">Director: </span>
                <span className="text-sm">
                  {director?.map((d, i) => (
                    <span key={i}>
                      {d?.name}
                      {director?.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            )}
            {writer?.length > 0 && (
              <div className="mt-1">
                <span className="font-semibold mr-1">Writer: </span>
                <span className="text-sm">
                  {writer?.map((d, i) => (
                    <span key={i}>
                      {d?.name}
                      {writer?.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>
          {movie?.homepage && (
            <Link
              href={movie?.homepage}
              target="_blank"
              type="button"
              class="text-white mt-3 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Official Page
            </Link>
          )}
        </div>
      </div>
      <div className="max-w-7xl gap-5 mx-auto py-4 text-2xl font-extrabold">
        <h1 className="underline rounded-lg underline-offset-8 decoration-4 decoration-red-400">
          Movie Costs
        </h1>
        <div className="mt-3 sm:grid sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8 max-w-7xl gap-5 mx-auto py-4">
          {movie?.credits?.cast?.slice(0, 16).map((d) => (
            <div className="flex items-center flex-col gap-2">
              {d?.profile_path ? (
                <Image
                  width={130}
                  height={130}
                  className="w-[130px] h-[130px] rounded-full object-cover"
                  src={`https://image.tmdb.org/t/p/original${d?.profile_path}`}
                  alt="sdsdd"
                />
              ) : (
                <div class="w-[130px] h-[130px] relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span class="uppercase font-medium text-2xl  text-gray-600 dark:text-gray-300">
                    {d.name[0]}
                    {d.name[1]}
                  </span>
                </div>
              )}
              <h5 className="text-sm">{d.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl gap-5 mx-auto py-4 text-2xl font-extrabold">
        <h1 className="underline rounded-lg underline-offset-8 decoration-4 decoration-red-400">
          Official Videos
        </h1>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-7xl gap-5 mx-auto py-4">
          {movie?.videos?.results?.slice(0, 8).map((v) => (
            <div key={v.id}>
              <div className="cursor-pointer ">
                <img
                  src={`https://img.youtube.com/vi/${v.key}/mqdefault.jpg`}
                  alt="dd"
                />
                {/* <button className="button play absolute -mt-28 ml-20"></button> */}
              </div>
              <div className="text-sm font-normal mt-2">
                {v?.name || v?.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


