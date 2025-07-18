
import { useNavigate } from 'react-router-dom';
import '../CSS/movieCard.css'
function MovieCard({movie}){
  const navigate = useNavigate();
  
  return (
    <div 
      className="movie-card" 
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;