import React from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      
    </div>
  );
}

export default App;
