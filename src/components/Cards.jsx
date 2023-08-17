import React from 'react'

function Cards({ data}) {
  return (
    <div>
      {data.map((result)=>(
        <div key={result.id}>
        {result?.title}
        </div>
      ))}
    </div>
  )
}

export default Cards