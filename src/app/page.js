import Cards from '@/components/Cards';

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&include_video=true&language=en-US&&append_to_response=credits`,
    { next: { revalidate: 10000 } }
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
