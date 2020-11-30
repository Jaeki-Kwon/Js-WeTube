// "/" 을 다루기 위한 Router

import expree from "express"
import routes from "../routes"
import { home, search } from "../controllers/videoController";
import { getJoin,
         getLogin,
         logout,
         postJoin,
         postLogin 
} from "../controllers/userController";

const globalRouter = expree.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;