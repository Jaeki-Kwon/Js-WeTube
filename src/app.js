// export default 일 때 이렇게 import 함
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
/* export만을 사용했을 때 이렇게 import 함
import { userRouter } from "./routers" */
import "./passport";

const app = express();

const CokieStore = MongoStore(session);

// middleware 자리
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Cookie를 해독
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

// middleware가 끝난 뒤 실행
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
