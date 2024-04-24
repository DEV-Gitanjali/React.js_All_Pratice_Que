import React from 'react'
import { BrowserRouter, Routes ,Route}   from 'react-router-dom';
import "./App.css";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import { Themeprovider } from './Theme-context';


function App() {
  return (
    <Themeprovider>

    
  <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
  </BrowserRouter>

    </Themeprovider>
  );
}

export default App
