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

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Main' element={<MainContent/>}/>
      <Route path='/Create' element={<CreateDish/>}/>
      <Route path='/Update/:id' element={<UpdateDish/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='SignUp' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
