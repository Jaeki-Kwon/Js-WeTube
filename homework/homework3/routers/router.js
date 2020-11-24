import express from "express";
import routes from "../routes";
import { home, login, photos, profile } from "../controllers/controller";

const router = express.Router();

router.get(routes.home, home);
router.get(routes.login, login);
router.get(routes.photos, photos);
router.get(routes.profile, profile);

export default router;
