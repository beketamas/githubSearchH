import SearchBar from "./components/searchBar/SearchBar"
import Header from "./components/header/Header"
import UserData from "./components/userdata/UserData"
import './app.css'
import { useEffect, useState } from "react"
import { userDataType } from "./type/userdata"

const App=()=> {

  const [darkmode,setDarkmode] = useState(true)
  const [username, setUSername] = useState({})
  
  const toggleDarkmode = ()=>{
    setDarkmode(prev=>!prev)
  }

  const handleSetusername = (user:userDataType)=>{setUSername(user)}

  useEffect(()=>{
    document.body.className=`${darkmode?'dark':'light'}`
  },[darkmode])

  return (
  <div className="app">    
    <div className="container">
      <Header darkmode={darkmode} toggleDarkmode={toggleDarkmode}></Header>
      <SearchBar saveUserData={handleSetusername}></SearchBar>
      <UserData userdata={username}></UserData>
    </div>
  </div>
)
}

export default App
