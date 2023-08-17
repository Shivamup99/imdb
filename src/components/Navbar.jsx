"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

export default function Navbar() {
    const params = useSearchParams();
    const genera = params.get("genre");
  return (
    <div className="flex items-center justify-center my-8">
      <Link
        className={`mx-10 text-xl font-bold ${
          genera &&
          genera === "fetchTrending" &&
          "underline rounded-lg underline-offset-8 decoration-4 decoration-red-400"
        }`}
        href={`/?genre=fetchTrending`}
      >
        Trending
      </Link>
      <Link
        className={`text-xl font-bold ${
          genera &&
          genera === "fetchTopRated" &&
          "underline rounded-lg underline-offset-8 decoration-4 decoration-red-400"
        }`}
        href={`/?genre=fetchTopRated`}
      >
        Top Rated
      </Link>
    </div>
  );
}
