import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form'
import DataSubmit from './components/useEffect'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/navBar/Home'
import Contact from './components/navBar/Contact'
import Service from './components/navBar/Service'

function App() {
  return(<>
  {/* <DataSubmit/> */}
  {/* <Form/> */}

  <NavBar/>
  <Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/contact' element={<Contact/>}/>

  </Routes>
  </>)
}

export default App
