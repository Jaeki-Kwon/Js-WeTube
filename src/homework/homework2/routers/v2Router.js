import express from "express";
import routes from "../routes";
import { apiV2Remove, apiV2Edit } from "../controllers/controller";

const v2Router = express.Router();

v2Router.get(routes.apiV2Remove, apiV2Remove);
v2Router.get(routes.apiV2Edit, apiV2Edit);

export default v2Router;
