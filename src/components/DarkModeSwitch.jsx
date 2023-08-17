"use client"
import React, { useEffect, useState } from 'react'
import { MdLightMode } from 'react-icons/md'
import {BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
export default function DarkModeSwitch() {
    const [rendering, setRendering] = useState(false)
    const { systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme ==="system" ? systemTheme:theme
    useEffect(()=>{
      setRendering(true);
    },[])
  return (
    <>
      {rendering && (currentTheme === "dark" ? (
        <MdLightMode className="text-white" onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill
          className="text-white"
          onClick={() => setTheme("dark")}
        />
      ))}
    </>
  );
}
