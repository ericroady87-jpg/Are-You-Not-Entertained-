const BASE_URL = 'http://localhost:4000/movies';

const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/${query}`);
  const data = await res.json();
  return data;
};

const getMovieDetails = async (omdbId) => {
  const res = await fetch(`${BASE_URL}/omdb/${omdbId}`);
  const data = await res.json();
  return data;
};

export { searchMovies, getMovieDetails };