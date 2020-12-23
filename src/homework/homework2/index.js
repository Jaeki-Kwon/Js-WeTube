import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import coursesRouter from "./routers/coursesRouter";
import apiRouter from "./routers/apiRouter";
import v1Router from "./routers/v1Router";
import v2Router from "./routers/v2Router";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter);
app.use(routes.api, v1Router);
app.use(routes.api, v2Router);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
