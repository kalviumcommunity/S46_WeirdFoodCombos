/* eslint-disable react/no-unescaped-entities */
import './App.css'
// import bg from './Assets/Bg.png'
import CreateDish from './components/CreateDish'
import Login from './components/Login'
import MainContent from './components/MainContent'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Routes , Route } from 'react-router-dom'
import UpdateDish from './components/UpdateDish'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Profile from './components/Profile'
import './index.css'

function App() {

    
  // const [userData, setUserData] = useState({})
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post('http://localhost:3000/getsingleUser', {
  //         token: Cookies.get('token')
  //       });
  //       // console.log(response.data);
  //       setUserData(response.data)
  //     } catch (error) {
  //       console.error("Request not found:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(Cookies.get('token'));



  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Main' element={<MainContent/>}/>
      <Route path='/Create' element={<CreateDish/>}/>
      <Route path='/Update/:id' element={<UpdateDish/>}/>
      <Route path='/SignIn' element={<SignIn />}/>
      <Route path='SignUp' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App
