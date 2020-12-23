import express from "express";
import { home, create, detail, search, edit, remove } from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.route("/create").get(create).post(create);
movieRouter.get("/search", search);
movieRouter.get("/:id", detail);
movieRouter.route("/:id/edit").get(edit).post(edit);
movieRouter.get("/:id/delete", remove);

export default movieRouter;
