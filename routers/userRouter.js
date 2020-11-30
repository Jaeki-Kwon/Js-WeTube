// Router : 라우트를 카테고리 별로 쪼개서 묶을 수 있음

import express from "express";
import routes from "../routes";
import {
    userDetail,
    editProfile,
    changePassword
  } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
