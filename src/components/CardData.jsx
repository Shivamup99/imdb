import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

export default function CardData({result}) {
  return (
    <Link
      href={`/movie/${result?.id}`}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Image
        width={400}
        height={400}
        className="rounded-t-lg"
        src={`https://image.tmdb.org/t/p/original${
          result?.backdrop_path || result?.poster_path
        }`}
        alt="sds"
        style={{ maxWidth: "100%", height: "300px", objectFit: "cover" }}
      />
      <p className="z-50 absolute -mt-20 bg-gray-100 text-red-800   border-solid border-4 border-green-600 rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm">
        {result?.vote_average.toFixed(1)}
        <AiOutlineStar className='ml-1 font-bold'/>
      </p>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
            {result?.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
          {result?.overview}
        </p>
      </div>
    </Link>
  );
}
