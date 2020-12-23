import fs from "fs";

export const getTxt = (req, res) => {
  res.render("main", { pageTitle: "Home!" });
};

var txt;
export const postTxt = (req, res) => {
  const {
    file: { path },
  } = req;
  fs.readFile(`${path}`, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    txt = data;
    // res.render("read", { pageTitle: "Contents", data });
    res.redirect("/read");
  });
};

export const read = (req, res) => {
  // console.log(txt);
  res.render("read", { pageTitle: "Contents", txt });
};
