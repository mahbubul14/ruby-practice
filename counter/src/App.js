import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/about';
import Navbar from './component/navbar';
import Home from './component/home';
import Quote from './component/quote';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/quote' element={<Quote/>} />
      </Routes>
    </Router>
  );
}

export default App;
