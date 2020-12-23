import express from "express";
import { getTxt, postTxt, read } from "./txtController";
import { uploadText } from "./middlewares";

const router = express.Router();

router.get("/", getTxt);
router.post("/", uploadText, postTxt);

router.get("/read", read);

export default router;
