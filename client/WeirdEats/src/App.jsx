/* eslint-disable react/no-unescaped-entities */
import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import bg from './Assets/1000_F_732383402_IWGm9m6rFkrvd2LM3VFpX0lNWZ1PD7jZ.jpg'

function App() {

  return (
    <>
    <div>
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}>
      <Header/>
      <Content/>
    </div>
    </div>
    </>
  )
}

export default App
