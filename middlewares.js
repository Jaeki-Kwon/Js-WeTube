// 전역적으로(글로벌) 사용할 수 있는 변수를 추가하는 방법
// 모든 템플릿에서 사용 가능. 템플릿, 뷰, 모든 곳에서 사용 가능
import multer from "multer";
import routes from "./routes";

// file을 Upload하고 URL을 반환하는 middleware
const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log(req.user);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

// "videoFile" 은 upload.pug의 file의 name 값
export const uploadVideo = multerVideo.single("videoFile");
