import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Article from './Components/Article';
import About from './Components/About';


const App = () => {
  return (
   <div className='h-screen w-screen'>
    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Article/:id" element = {<Article/>} />
        <Route path = "/About" element = {<About/>} />
    </Routes>
   </div>
  )
}

export default App