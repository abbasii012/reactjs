import React from 'react'
import {useState,useEffect}from "react"
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data, setdata] = useState({})
  // useEffect(() => {
  //   fetch('https://api.github.com/users/abbasii012')
  //   .then((res)=>res.json()).then((res=>setdata(res)))
   
  // }, [])
  const data = useLoaderData()
  
  return (
    <div className='bg-gray-800 text-white  text-center
    m-4 p-4 text-3xl'>Github Followers: {data.name}
    <img src={data.avatar_url} alt="pics"
    width={300} />
    </div>
  )
}

export default Github

export const githubinfo = async()=>{
   try {
    const respose = await fetch('https://api.github.com/users/abbasii012')
    return respose.json()
   } catch (error) {
    return error
   }
  }