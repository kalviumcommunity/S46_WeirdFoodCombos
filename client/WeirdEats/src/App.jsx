/* eslint-disable react/no-unescaped-entities */
import './App.css'
import bg from './Assets/Bg.png'
import Login from './components/Login'

function App() {

  return (
    <>
    <div>
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}>
      <Login/>
    </div>
    </div>
    </>
  )
}

export default App
