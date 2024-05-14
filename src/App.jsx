import React  from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Signup from './components/login & signup/signup.jsx'
import Movies from './components/Movies/Movies.jsx'
import Series from './components/Movies/Series.jsx'
import Login from "./components/login & signup/login.jsx"
import Intro from "./components/IntroPage/Intro.jsx"


const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro/>}/>
    </Routes>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
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
    <Routes>
      <Route path="/series" element={<Series/>}/>
    </Routes>
    </BrowserRouter>

      
    </>
  )
}
export default App
