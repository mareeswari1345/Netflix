// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import officerImg from './assets/officer.jpeg';
import courtImg from './assets/court.jpg';
import netflixImg from './assets/netflix.jpeg';
import dramaImg from './assets/drama.jpeg';
import actionImg from './assets/action.jpeg';
import seriesImg from './assets/series.jpeg';

const movies = [
{ id: 1, title: 'Officer', image: officerImg },
{ id: 2, title: 'Court', image: courtImg },
{ id: 3, title: 'Netflix', image: netflixImg },
{ id: 4, title: 'Drama', image: dramaImg },
{ id: 5, title: 'Action', image: actionImg },
{ id: 6, title: 'Series', image: seriesImg },
];

function Home() {
const navigate = useNavigate();

const handleLogout = () => {
alert('You have been logged out!');
navigate('/login');
};

return (
<div className="home-container">
{/* Navbar */}
<div className="navbar">
<img  
src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"  
alt="Netflix Logo"  
className="netflix-logo"  
/>
<div className="nav-right">
<span className="profile-name">Hi, User</span>
<button className="logout-button" onClick={handleLogout}>Logout</button>
</div>
</div>

{/* Hero */}  
  <div className="hero-section">  
    <div className="hero-overlay" />  
    <div className="hero-content">  
      <h1 className="hero-title">DETECTIVE<br />UJJWALAN</h1>  
      <p className="hero-sub">#7 in Movies Today 👍 We think you’ll love this!</p>  
      <div className="hero-buttons">  
        <button className="play-btn">▶ Play</button>  
        <button className="info-btn">ℹ More Info</button>  
      </div>  
    </div>  
  </div>  

  {/* Movies */}  
  <div className="movie-row">  
    <h2>Movies & TV Shows Dubbed in Tamil</h2>  
    <div className="movie-thumbnails">  
      {movies.map((movie) => (  
        <div key={movie.id} className="movie-thumb">  
          <img src={movie.image} alt={movie.title} />  
          <p>{movie.title}</p>  
        </div>  
      ))}  
    </div>  
  </div>  
</div>

);
}

export default Home;


 