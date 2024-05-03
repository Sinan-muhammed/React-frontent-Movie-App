import React  from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/components/Home/Home.jsx"
import Login from "./assets/components/login & signup/login.jsx"
import Signup from './assets/components/login & signup/signup.jsx'
import Movies from './assets/components/Movies/Movies.jsx'

const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Routes>
      <Route path="/movies" element={<Movies/>}/>
    </Routes>
    </BrowserRouter>

      
    </>
  )
}
export default App
