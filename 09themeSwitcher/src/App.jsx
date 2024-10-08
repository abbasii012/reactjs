import { useEffect, useState } from 'react'
import './App.css'
import {ThemeProvider} from "./context/theme";
import ThemeBtn from './componants/ThemeBtn';
import Card from './componants/Card';

function App() {
  const [ themeModes,setthemeMOdes] = useState('light')

  const darktheme=()=>{
    setthemeMOdes('dark')
  }
  const lighttheme=()=>{
    setthemeMOdes('light')
  }

//  actual change theme
    useEffect(()=>{
        document.querySelector('html').classList.remove('dark',"light")
        document.querySelector('html').classList.add(themeModes)
    },[themeModes])
  return (
    <ThemeProvider value={{themeModes,darktheme,lighttheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
      <Card/>
      </div>
   </div>
</div>
</ThemeProvider>
  )
}

export default App
