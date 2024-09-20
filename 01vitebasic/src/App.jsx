import { useState } from 'react'
import Chai from './Chai'


const username = 'haseeb sajjad'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>chai aur code| {username} !</h1>
    <Chai/>
    </>
  )
}

export default App
