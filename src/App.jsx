import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Toaster } from 'react-hot-toast';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/tools' element={<Tools/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>} />
      </Routes>
      <Toaster/>
    </Router>
    </>
  )
}

export default App