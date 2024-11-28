import React, { FormEvent, useEffect, useState } from 'react'
import './searchbar.css'
import { userDataType } from '../../type/userdata'

type searchbarprops={
  saveUserData:(userdata:userDataType)=>void
}

const SearchBar = ({saveUserData}:searchbarprops) => {

  const [user,setUser] = useState('');

  const handleUserChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUser(e.target.value)
  }

  const fetchuser = async(user:string)=>{
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)
      if (!response.ok) {
        throw new Error;
      }
      const data = await response.json();
      console.log(data);
      saveUserData(data);
    } catch (error) {
      console.error('error: ', error)
    }
  }

  useEffect(()=>{
    fetchuser('llorintz')
  },[])

const handleSubmit=(e:FormEvent)=>{
  e.preventDefault();
  fetchuser(user)
}

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <img className='search-icon' src='./images/icon-search.svg' alt="" />
      <input value={user} onChange={handleUserChange} className='userinput' type="text" placeholder='Search Github User'/>
      <button className='search-button'>Search</button>
    </form>
  )
}

export default SearchBar