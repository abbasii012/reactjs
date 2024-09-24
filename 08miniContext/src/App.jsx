import UserContextProvider from "./context/UserContextProvider";
import './App.css'
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  

  return (
    <UserContextProvider>
     <div>Chai aur React</div>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
