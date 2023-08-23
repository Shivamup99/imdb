"use client";
import Image from 'next/image';
import React,{useRef} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default async function Banner() {
    // const screenWidth = window.innerWidth;
     const elementRef = useRef();
   const response = await fetch(
     `https://api.themoviedb.org/3/trending/movie/day?api_key=8d9157942be8592a5c09af9740fbdc4f&language=en-US`
   );
    const data = await response.json();
    const results = data.results;


 const sliderRight = (element) => {
   element.scrollLeft += 1350;
 };

 const sliderLeft = (element) => {
   element.scrollLeft -= 1400;
 };

  return (
    <div classname="max-w-7xl gap-5 mx-auto py-4">
      <div>
        <HiChevronLeft
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer "
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />

        <div
          className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
          ref={elementRef}
        >
          {results.slice(10).map((item) => (
            <img
              key={item.id}
              src={`https://image.tmdb.org/t/p/original${
                item?.backdrop_path || item?.poster_path
              }`}
              className="min-w-full  md:h-[510px] object-cover object-left-top mr-2 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

