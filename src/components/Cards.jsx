import React from 'react'
import CardData from './CardData'

function Cards({ data}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-7xl gap-5 mx-auto py-4'>
      {data.map((result)=>(
        <CardData result={result} key={result.id}/>
      ))}
    </div>
  )
}

export default Cards