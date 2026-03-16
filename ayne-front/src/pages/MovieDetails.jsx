import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';

export default function MovieDetails() {
  const { omdbId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(omdbId);
        setMovie(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, [omdbId]);

  if (!movie) return <h2>Loading...</h2>;

  console.log('movie details:', movie);
console.log('poster url:', movie?.Poster);

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Plot}</p>
      {movie.Poster && movie.Poster !== 'N/A' && (
        <img src={movie.Poster} alt={movie.Title} width="200" />
      )}
    </div>
  );
}