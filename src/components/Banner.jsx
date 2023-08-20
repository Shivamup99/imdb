import Image from 'next/image';
import React from 'react'
import Carousel from './Carousel';

export default async function Banner() {
   const response = await fetch(
     `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&language=en-US`,
     { next: { revalidate: 10000 } }
   );
    const data = await response.json();
    const results = data.results;
    //  console.log(data);
  return (
    <div className="max-w-7xl gap-5 mx-auto py-4">
      <Carousel autoSlide={true} autoSlideInterval={3000}>
        {results.slice(6)?.map((r) => (
          <Image
            width={1000}
            height={400}
            className="rounded-t-lg"
            src={`https://image.tmdb.org/t/p/original${
              r?.backdrop_path || r?.poster_path
            }`}
            alt="sds"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        ))}
      </Carousel>
    </div>
  );
}

