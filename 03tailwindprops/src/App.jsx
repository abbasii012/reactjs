import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
const val = {username2: "haseeb"}
  return (
    <>
     <h1 className='bg-red-700  bg-green-'>hello tailwind</h1>
     <Card  username='chai' btn="Buy with me" value={val}/>
     <Card username='code' btn="abbasi" value={val}/>
    </>
  )
}

export default App
