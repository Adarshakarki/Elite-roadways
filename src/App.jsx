import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';     // Ensure correct import path
import About from './components/About';   // Ensure correct import path
import Features from './components/Features'; // Ensure correct import path
import Contact from './components/Contact';   // Ensure correct import path
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Addbus from './components/Addbus';
import BookSeat from './components/BookSeat.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page - Header included */}
        <Route path="/" element={<Landing />} />
        
        {/* Other Pages - No Header */}
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home'  element={<Home/>} />
        <Route path='/addbus' element={<Addbus/>}/>
        <Route path='/bookseat' element={<BookSeat/>}/>
      </Routes>
    </Router>
  );
};

export default App;


