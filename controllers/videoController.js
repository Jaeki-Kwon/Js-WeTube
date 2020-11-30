// controller : 어떤 일이 어떻게 발생하는지에 관한 로직
import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) =>{
  const {
    query: { term: searchingBy }
  } = req;
  // const searchingBy = req.query.term;
  // 위에꺼와  const searchingBy = req.query.term 과 같은 뜻 
  res.render("search", { pageTitle: "Search", searchingBy, videos });
}
  
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(124443));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
