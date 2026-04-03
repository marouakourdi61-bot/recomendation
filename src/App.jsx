import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlateCard from './component/PlateCard'

import Home from "./pages/Home";
import Plates from "./pages/Plates";
import PlateDetail from "./pages/PlateDetail";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {



  return (


      <BrowserRouter>
      
        <Navbar/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/plates" element={<Plates />} />
          <Route path="/plates/:id" element={<PlateDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>


  );
}

export default App;
