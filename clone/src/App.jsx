import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './register';
import Home from './home';
import './App.css';
import MovieDetails from './components/movieDetails'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
    ;
    </>

  );
}

export default App;