import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';


function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser}=useContext(UserContext)

   const submitdata = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    
  return (
    <>
        <div>Login</div>
        <div>
            <input type="text"
                 name="username" 
                 id="user" 
                 value={username}
                 onChange={(e)=>setusername(e.target.value)} 
                 />
            <br/>
            <input type="text" name="password" id="password"  value={password}
            onChange={(e)=>setpassword(e.target.value)} />
            <button onClick={submitdata}>Submit</button>
        </div>
    </>
  )
}

export default Login