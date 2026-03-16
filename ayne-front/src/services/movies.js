const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/movies`;

const getAllMovies = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

const getMovieById = async (omdbId) => {
  try {
    const response = await fetch(`${BASE_URL}/omdb/${omdbId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch movie with id ${omdbId}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching movie with id ${omdbId}:`, error);
    throw error;
  }
};

const createMovie = async (formData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('Failed to create movie');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating movie:', error);
    throw error;
  }
};

const updateMovie = async (formData, movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/${movieId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update movie with id ${movieId}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating movie with id ${movieId}:`, error);
    throw error;
  }
};

const deleteMovie = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/${movieId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete movie with id ${movieId}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error deleting movie with id ${movieId}:`, error);
    throw error;
  }
};

export {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};