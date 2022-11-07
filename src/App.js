import React from 'react';
import './index.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
