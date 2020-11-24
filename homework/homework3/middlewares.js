import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Homework!";
  res.locals.routes = routes;
  next();
};
