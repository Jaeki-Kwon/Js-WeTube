import multer from "multer";

const multerText = multer({ dest: "uploads/text" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Nomad Movies";
  next();
};

export const uploadText = multerText.single("textFile");
