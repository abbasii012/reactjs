import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import './App.css';
import authServices from './appwrite/auth';
import { Footer, Header } from "./components/index";
import { login, logout } from "./store/authslice";
function App() {
  
  const [loading, setloading] = useState(true)
 const dispatch = useDispatch()
 useEffect(() => {
    authServices.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setloading(false)
    }) 
 },[])

 return !loading ? (
  <div className='min-h-screen flex flex-wrap   bg-gray-800'>
    <div className='w-full block '>
      <Header/>
      <main>
      TODO:  <Outlet />
      </main>
      <Footer />
    </div>
  </div>
) :(null)
}

export default App
