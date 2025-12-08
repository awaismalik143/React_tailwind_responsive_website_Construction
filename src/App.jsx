import { useState } from 'react'
import Navbar from './components/Navbar'
import FullPageCallHome from './components/pages/home/FullPageCallHome'
import { HashRouter, Routes, Route } from "react-router-dom";
import AllAboutComponentsCall from './components/pages/About/AllAboutComponentsCall'
import ProjectCallAllCom from './components/pages/Projects/ProjectCallAllCom'
import ServicesAllcom from './components/pages/Services/ServicesAllcom'
import AllCompBlog from './components/pages/Blog/AllCompBlog'
import CallallPagesofContact from './components/Contact/CallallPagesofContact';
import AllPagesComponetCallHere from './components/pages/PagesComponet/AllPagesComponetCallHere';
import AllPagecall2 from './components/pages/Pagedrop2/AllPagecall2';
import AllPages3call from './components/pages/PagesDrop3/AllPages3call';

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

          <Route path='/Element' element={<AllPagesComponetCallHere/>} />
          <Route path='/Page2' element={<AllPagecall2/>} />
          <Route path='/Page3' element={<AllPages3call/>} />


        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
