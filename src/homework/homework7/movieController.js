/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
  const movies = await Movie.find({}).sort({ _id: -1 });
  res.render("movies", { pageTitle: "Home", movies });
};

export const create = async (req, res) => {
  if (req.method === "GET") {
    res.render("create", { pageTitle: "Create" });
  } else if (req.method === "POST") {
    const {
      body: { title, synopsis, year, rating, genres },
    } = req;
    const newMovie = await Movie.create({
      title,
      synopsis,
      year,
      rating,
      genres: genres.split(","),
    });
    res.redirect(`/${newMovie.id}`);
  }
};

export const detail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("detail", { pageTitle: movie.title, movie });
  } catch (error) {
    res.render("404", { pageTitle: "Movie not found" });
  }
};

export const edit = async (req, res) => {
  const {
    params: { id },
  } = req;
  if (req.method === "GET") {
    const movie = await Movie.findById(id);
    res.render("edit", { pageTitle: "Edt", movie });
  } else if (req.method === "POST") {
    const {
      body: { title, synopsis, year, rating, genres },
      params: { id },
    } = req;
    await Movie.findByIdAndUpdate(id, {
      title,
      synopsis,
      year,
      rating,
      genres: genres.split(","),
    });
    res.redirect(`/${id}`);
  }
};

export const remove = async (req, res) => {
  const {
    params: { id },
  } = req;
  await Movie.findByIdAndDelete(id);
  res.redirect("/");
};

export const search = async (req, res) => {
  const {
    query: { year, rating },
  } = req;
  if (year) {
    const movies = await Movie.find({ year: { $gte: parseInt(year, 10) } });
    res.render("movies", { pageTitle: `Filtering by year: ${year}`, movies });
  } else if (rating) {
    const movies = await Movie.find({ rating: { $gte: parseFloat(rating) } });
    res.render("movies", {
      pageTitle: `Filtering by rating: ${rating}`,
      movies,
    });
  }
};
