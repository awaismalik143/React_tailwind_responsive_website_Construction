import { useState } from 'react'
import Navbar from './components/Navbar'
import FullPageCallHome from './components/pages/home/FullPageCallHome'
import { HashRouter, Routes, Route } from "react-router-dom";
import AllAboutComponentsCall from './components/pages/About/AllAboutComponentsCall'
import ProjectCallAllCom from './components/pages/Projects/ProjectCallAllCom'
import ServicesAllcom from './components/pages/Services/ServicesAllcom'
import AllCompBlog from './components/pages/Blog/AllCompBlog'
import CallallPagesofContact from './components/Contact/CallallPagesofContact';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<FullPageCallHome />} />
          <Route path="/about" element={<AllAboutComponentsCall />} />
          <Route path="/projects" element={<ProjectCallAllCom />} />
          <Route path="/services" element={<ServicesAllcom />} />
          <Route path="/blog" element={<AllCompBlog />} />
          <Route path="/Contact" element={<CallallPagesofContact />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
