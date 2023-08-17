"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className='text-gray-800 select-none dark:text-gray-100 dark:bg-gray-800 transition-colors duration-300 min-h-screen'>{children}</div>
    </ThemeProvider>
  );
}

export default Providers