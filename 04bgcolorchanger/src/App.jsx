import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
   
   <div className='w-full" h-screen duration-200'
   style={{backgroundColor: color}}
   >
   <div className='fixed flex flex-wrap 
   justify-center bottom-12 inset-x-0 px-3'>
    <div className='flex flex-wrap justify-center
    gap-3 shadow-lg bg-white text-black py-2 px-3 rounded-3xl'>
      <button
      onClick={()=>setColor('red')} className='text-white ouline-none py-2 px-3 rounded-3xl'
     style={{backgroundColor: 'red'}}>red</button>
      <button
       onClick={()=>setColor('green')} className='text-white ouline-none py-2 px-3 rounded-3xl'
     style={{backgroundColor: 'green'}}>green</button>
      <button 
      onClick={()=>setColor('yellow')}className='text-white ouline-none py-2 px-3 rounded-3xl'
     style={{backgroundColor: 'yellow'}}>yellow</button>
     <button 
      onClick={()=>setColor('black')}className='text-white ouline-none py-2 px-3 rounded-3xl'
     style={{backgroundColor: 'black'}}>black</button>
     <button 
      onClick={()=>setColor('blue')}className='text-white ouline-none py-2 px-3 rounded-3xl'
     style={{backgroundColor: 'blue'}}>blue</button>
     <button 
      onClick={()=>setColor('orange')}className='text-white ouline-none py-2 px-3 rounded-3xl'
     style={{backgroundColor: 'orange'}}>orange</button>
    </div>
   </div>
   </div>
   
  )
}

export default App
