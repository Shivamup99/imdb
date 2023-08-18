import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function CardData({result}) {
  return (
    <Link href={`/movie/${result?.id}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <Image width={400} height={400}
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original${result?.backdrop_path || result?.poster_path}`}
          alt='sds' style={{maxWidth:"100%", height:"auto"}}
        />
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
