import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import FullPageCallHome from './components/pages/home/FullPageCallHome'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllAboutComponentsCall from './components/pages/About/AllAboutComponentsCall'
import ProjectCallAllCom from './components/pages/Projects/ProjectCallAllCom'
import ServicesAllcom from './components/pages/Services/ServicesAllcom'
import AllCompBlog from './components/pages/Blog/AllCompBlog'
function App() {
  const [count, setCount] = useState(0)

  return (

    
 <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={< FullPageCallHome/>} />
      <Route path='/About' element={< AllAboutComponentsCall/>} />
      <Route path='/Projects' element={<ProjectCallAllCom/>} />
      <Route path='/Services' element={<ServicesAllcom/>} />
      <Route path='/Blog' element={<AllCompBlog/>} />


     </Routes>
      </BrowserRouter>
     

  </div> 
    
  )
}

export default App
