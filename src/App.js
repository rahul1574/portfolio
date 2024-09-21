import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Router>
    <div id='display'>
    <Home/>
      <Routes>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
