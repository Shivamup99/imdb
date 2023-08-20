import Cards from '@/components/Cards';
import React from 'react'

export default async function SearchPage({params}) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`)
    if(!response.ok){
        throw new Error("Error fetching movie data")
    }
    const data = await response.json();
    const results = data.results;
    // console.log(data.results)
  return (
    <div>
        {results && results.length===0 && (
            <h1 className='text-center pt-6'>No data found</h1>
        )}
        {results && <Cards data={results}/>}
    </div>
  )
}


