import { getMovieById, getMovies, addMovie } from ".";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie, pageTitle: movie.title });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
export const add = (req, res) => {
  if (req.method === "GET") {
    return res.render("add", { pageTitle: "Add Movie" });
  } else if (req.method === "POST") {
    const {
      body: { title, genres, synopsis }
    } = req;
    addMovie({ title, synopsis, genres: genres.split(",") });
    return res.redirect("/");
  }
};

/* 
내가 한거
import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) => {
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });
};

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const getAdd = (req, res) => {
  res.render("add", { pageTitle: "Add" });
};

export const postAdd = (req, res) => {
  const {
    body: { title, synopsis, genres }
  } = req;
  const splitGenres = genres.split(",");
  addMovie({ title, synopsis, splitGenres });
  res.render("movies", { movies: getMovies(), pageTitle: "Movies" });
};


*/
