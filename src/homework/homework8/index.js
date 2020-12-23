import express from "express";
import path from "path";
import bodyParser from "body-parser";
import txtRouter from "./txtRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", txtRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

// https://codesandbox.io/s/txt2html-solution-0wb76
