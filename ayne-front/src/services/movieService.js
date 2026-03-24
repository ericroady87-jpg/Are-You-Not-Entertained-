const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/movies`;

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