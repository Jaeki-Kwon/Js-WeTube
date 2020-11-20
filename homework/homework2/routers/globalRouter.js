import express from "express";
import routes from "../routes";
import {
  home,
  join,
  login,
  confirmAccount
} from "../controllers/controller";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.confirmAcoount, confirmAccount);

export default globalRouter;
