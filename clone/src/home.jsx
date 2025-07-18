import { movies } from './Data';
import MovieCard from './components/moviecard';
import NavBar from './components/navbar.jsx';
import './CSS/home.css'
const HomePage = () => {
  return (
    <>
    <NavBar/>
      <div className="home-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Movies in Tamil</h1>
            <p className="hero-subtitle">Experience blockbusters in your native language</p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">Popular on TamilFlix</h2>
            <div className="view-all">View All</div>
          </div>
          
          <div className="movies-grid">
            {movies.map(movie => {
              if(movie.id<7)
              {
                return <MovieCard key={movie.id} movie={movie} />
              }
             
            })}
          </div>

          <div className="section-header">
            <h2 className="section-title">New Releases</h2>
            <div className="view-all">View All</div>
          </div>
          
          <div className="movies-grid">
            {movies.slice().reverse().map(movie => {
              if(movie.id>5 || movie.id==1)
              {
                return <MovieCard key={movie.id} movie={movie} />
              }
              
})}
          </div>
        </div>
      </div>
   </>
  );
};

export default HomePage;