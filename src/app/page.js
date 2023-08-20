import Cards from '@/components/Cards';
import Image from 'next/image'

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3/${genre==='fetchTopRated' ? "movie/top_rated":"trending/all/week"}?api_key=${API_KEY}&language=en-US`,
    {next:{revalidate:10000}}
  );
  const data = await response.json();
  const results = data.results;
  // console.log(results);
  return (
    <div>
      <Cards data={results}/>
    </div>
  )
}
