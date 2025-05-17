import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './navbar/Home'
import About from './navbar/About'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'


function Header(){

  return(<>
  
  <ul>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
  </>)
}
function App() {
return( <>

<BrowserRouter>
<h1>Good Morning</h1>
<Header></Header>
<Routes>
  <Route path="/home" element={<Home/>}> </Route>
  <Route path="/about" element={<About/>}> </Route>
</Routes>

</BrowserRouter>
    </>
  )
}

export default App
