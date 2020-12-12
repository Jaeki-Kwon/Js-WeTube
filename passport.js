import passport from "passport";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

// Strategy : 로그인 하는 방식
/* createStrategy() : 이미 구성이 된 passport-local의
    LocalStragtegy를 생성
*/
passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// passport가 사용자 인증을 처리할 수 있도록 설정
// 즉, 쿠키에 오직 user.id만 담아서 보내라는 뜻
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
