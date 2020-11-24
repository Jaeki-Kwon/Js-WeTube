// 전역적으로(글로벌) 사용할 수 있는 변수를 추가하는 방법
// 모든 템플릿에서 사용 가능. 템플릿, 뷰, 모든 곳에서 사용 가능
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();
};