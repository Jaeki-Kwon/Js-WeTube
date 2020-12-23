import express from "express";
import routes from "../routes";
import {
  courses,
  coursesNew,
  coursesMine
} from "../controllers/controller";

const coursesRouter = express.Router();

coursesRouter.get("/", courses);
coursesRouter.get(routes.coursesNew, coursesNew);
coursesRouter.get(routes.coursesMine, coursesMine);

export default coursesRouter;
