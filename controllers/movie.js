const express = require('express');
const router = express.Router();
const movieApi = require('../services/movie-api.js');
const Movie = require('../models/movie.js');

// SEARCH OMDb
router.get('/search/:query', async (req, res) => {
  try {
    const data = await movieApi.searchMovies(req.params.query);
    res.json(data.Search || []);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// GET one OMDb movie by OMDb id
router.get('/omdb/:omdbId', async (req, res) => {
  try {
    const movie = await movieApi.getMovieById(req.params.omdbId);
    res.json(movie);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// GET all saved movies from MongoDB
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// GET one saved movie from MongoDB by Mongo _id
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;