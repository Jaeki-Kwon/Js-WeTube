import express from "express";
import routes from "../routes";
import { apiV1Buy, apiV1Refund } from "../controllers/controller";

const v1Router = express.Router();

v1Router.get(routes.apiV1Buy, apiV1Buy);
v1Router.get(routes.apiV1Refund, apiV1Refund);

export default v1Router;
