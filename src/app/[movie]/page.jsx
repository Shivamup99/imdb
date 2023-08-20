import Cards from "@/components/Cards";
import React from "react";

export default async function movie() {
   const response = await fetch(
     `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc`,
     { next: { revalidate: 10000 } }
   );
   const data = await response.json();
   const results = data.results;
   // console.log(results);
   return (
     <div>
       <Cards data={results} />
     </div>
   );
}

