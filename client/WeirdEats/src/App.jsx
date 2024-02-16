/* eslint-disable react/no-unescaped-entities */
import './App.css'
// import bg from './Assets/Bg.png'
// import Login from './components/Login'
import CreateDish from './components/CreateDish'
import MainContent from './components/MainContent'
import { Routes , Route } from 'react-router-dom'
import UpdateDish from './components/UpdateDish'

function App() {

  return (
    <>
    <div>
    {/* <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}>
      <Login/>
    </div> */}
    {/* <MainContent/> */}
    {/* <CreateDish/> */}
    </div>
    <Routes>
      <Route path='/' element={<MainContent/>}/>
      <Route path='/Create' element={<CreateDish/>}/>
      <Route path='/Update/:id' element={<UpdateDish/>}/>
    </Routes>
    </>
  )
}

export default App
