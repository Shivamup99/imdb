import React from 'react'
import Link from 'next/link'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidCameraMovie} from 'react-icons/bi'
import {MdMovie} from 'react-icons/md'
import DarkModeSwitch from './DarkModeSwitch'
export default function Header() {
  return (
    <div className="p-3 bg-slate-800 flex items-center justify-between">
      <div className="gap-5 flex items-center text-white">
        <Link
          href="/"
          className="flex items-center ml-6 hover:text-emerald-600"
        >
          <AiFillHome className="text-2xl mr-2" />
          <p className="font-semibold hidden sm:inline">Home</p>
        </Link>
        <Link
          href="/"
          className="flex items-center ml-6 hover:text-emerald-600"
        >
          <MdMovie className="text-2xl mr-2" />
          <p className="font-semibold hidden sm:inline">Movies</p>
        </Link>
        <Link
          href="/"
          className="flex items-center ml-6 hover:text-emerald-600"
        >
          <BiSolidCameraMovie className="text-2xl mr-2" />
          <p className="font-semibold hidden sm:inline">Shows</p>
        </Link>
      </div>
      <div className="flex items-center mx-2 gap-5 cursor-pointer">
        <DarkModeSwitch />
        <h2 className="font-bold bg-amber-400 py-1 px-2 rounded-lg text-2xl">
          imdb
        </h2>
      </div>
    </div>
  );
}
