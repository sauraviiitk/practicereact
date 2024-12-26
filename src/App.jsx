import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color,setcolor]=useState("red")
  const changecolor=()=>{
    setcolor("yellow")
  }
  const textcolormap={
    red:"black",
    yellow:"red",
    green:"white",
    black:"white"

  }

 // document.body.style.backgroundColor=color
  {/* <button 
    //  onClick={()=>{setcolor("orange")}}
    onClick={changecolor}
     >
      color

     </button> */}
  return (
    <>
  <div className='w-full h-full min-h-screen flex flex-col items-center justify-center' style={{ backgroundColor: color }}>
     <h1 className='text-4xl font-bold mb-8' style={{ color: textcolormap[color] }}> My favourite color is {color} </h1>
      <div className='space-x-4'> <button onClick={() => setcolor("red")} className='px-4 py-2 rounded-lg shadow-lg text-white bg-red-500 hover:bg-red-700 transition duration-300' > Red </button>
       <button onClick={() => setcolor("yellow")} className='px-4 py-2 rounded-lg shadow-lg text-white bg-yellow-500 hover:bg-yellow-700 transition duration-300' > Yellow </button>
        <button onClick={() => setcolor("green")} className='px-4 py-2 rounded-lg shadow-lg text-white bg-green-500 hover:bg-green-700 transition duration-300' > Green </button> 
        <button onClick={() => setcolor("black")} className='px-4 py-2 rounded-lg shadow-lg text-white bg-black hover:bg-gray-800 transition duration-300' > Black </button> </div>
         </div>

    </>
  )
}

export default App
