import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/movies.js';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieById(id);
        setMovie(movieData);
      } catch (err) {
        console.error(err);
        setError('Failed to load movie details.');
      }
    };

    fetchMovie();
  }, [id]);

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  if (!movie) {
    return (
      <div>
        <h1>Loading movie details...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <h2>Director: {movie.Director}</h2>
      <h2>Year: {movie.Year}</h2>
      <h2>Genre: {movie.Genre}</h2>
      <h2>Rating: {movie.Rating}</h2>
      <h2>Tomato Meter: {movie.TomatoMeter}</h2>
      <h2>Runtime: {movie.Runtime} </h2>
    </div>
  );
};

export default MovieDetail;