import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import RegisterPage from './components/Form/RegisterPage'
import LoginPage from './components/Form/LoginPage'
import Navbar from './components/Navbar/Navbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function App() {
  let BD=[]
  return (
    <div>
      <Navbar/>
     {/* <Home/>*/}
    <RegisterPage BD={BD}/>
    <LoginPage BD={BD}/>
    <Footer/>
    </div>

  )
}

export default App
