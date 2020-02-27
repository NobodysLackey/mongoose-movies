var Movie = require('../models/movie');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

function update(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}).then( (movie) => {
    res.status(200).json(movie);
  });
}

function deleteOne(req, res) {
  Movie.findByIdAndRemove(req.params.id).then( (movie) => {
    res.status(200).json(movie);
  });
}

function show(req, res) {
  Movie.findById(req.params.id).then( (movie) => {
    res.status(200).json(movie);
  });
}

function create(req, res) {
  Movie.create(req.body).then( (movie) => {
    res.status(201).json(movie);
  });
}

function index(req, res) {
  Movie.find({}).then( (movies) => {
    res.status(200).json(movies);
  });
}