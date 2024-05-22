import { useState } from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage';
import Drawpgae from "./Pages/Drawpage"
import Pastepage from "./Pages/Pastepage"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Aboutpage from "./Pages/Aboutpage"
import Contactpage from "./Pages/Contactpage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <BrowserRouter>


      <Navbar />

      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/draw" element={<Drawpgae />} />
          <Route path="/paste" element={<Pastepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />





        </Routes>
      </div>

    </BrowserRouter>
  )


}

export default App
