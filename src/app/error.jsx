"use client"
import React, { useEffect } from 'react'

export default function Error({error,reset}) {
    useEffect(()=>{
     console.log(error)
    },[error])
  return (
    <div className='text-center my-8'>
        <h1>
            Somthing went wrong !!!
        </h1>
        <button className='hover:text-amber-500' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
