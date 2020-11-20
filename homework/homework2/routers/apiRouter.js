import express from "express";
import routes from "../routes";
import { api, apiDocumentation } from "../controllers/controller";

const apiRouter = express.Router();

apiRouter.get("/", api);
apiRouter.get(routes.apiDocumentation, apiDocumentation);

export default apiRouter;
