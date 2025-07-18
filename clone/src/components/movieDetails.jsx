import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {movies} from '../Data'
import '../CSS/movieDetails.css'
import NavBar from './navbar.jsx'
function MovieDetails(){
  const { movieId } = useParams();
  const navigate = useNavigate();
  

  const movie = movies.find(m => m.id === parseInt(movieId));
  console.log('movie trailer url - ',movie.trailerUrl)
  
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
        <NavBar/>

        <div className="movie-details-container">

        <div 
            className="movie-hero" 
            style={{ backgroundImage: `url(${movie.backdrop})` }}
        >
            <div className="hero-overlay">
            <div className="hero-content">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-meta">
                <span>{movie.year}</span>
                <span>{movie.rating}</span>
                <span>{movie.duration}</span>
                <span>{movie.genres.join(', ')}</span>
                </div>
                <p className="movie-description">{movie.description}</p>
                <div className="action-buttons">
                <button className="play-button">Play</button>
                <button className="secondary-button">+ My List</button>
                </div>
            </div>
            </div>
        </div>

        <div className="trailer-section" >
    <h2>Video Clip</h2>
        <video width="100%" height="500" controls autoPlay >
    <source src={movie.trailerUrl} type="video/mp4" />
    Your browser does not support the video tag.
    </video>

    </div>


        <div className="cast-section">
            <h2>Cast</h2>
            <div className="cast-grid">
            {movie.cast.map((actor, index) => (
                <div key={index} className="cast-member">
                <img src={actor.profile} alt={actor.name} />
                <p>{actor.name}</p>
                <p className="character">{actor.character}</p>
                </div>
            ))}
            </div>
        </div>

        <div className="director-section">
            <h2>Director</h2>
            <p>{movie.director}</p>
        </div>

        <div className="similar-movies">
            <h2>More Like This</h2>
            <div className="movie-row">
            {movies.filter(m => m.id !== movie.id).slice(0, 6).map(similarMovie => (
                <div 
                key={similarMovie.id} 
                className="movie-card"
                onClick={() => navigate(`/movie/${similarMovie.id}`)}
                >
                <img src={similarMovie.image} alt={similarMovie.title} />
                </div>
            ))}
            </div>
        </div>
        </div>
     </>
  );
};

export default MovieDetails;