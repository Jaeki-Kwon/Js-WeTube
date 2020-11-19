import express from "express";

const app = express();

const handleHome = (req, res) => res.send("Home!");
const handleAoutUs = (req, res) => res.send("About-us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("No");

const message = (req, res, next) => {
  console.log("middleware!!");
  next();
};

const redirect = (req, res) => {
  console.log("되돌아가라!!");
  res.redirect("/");
};

app.use(message);

app.get("/", handleHome);
app.get("/about-us", handleAoutUs);
app.get("/contact", handleContact);
app.get("/protected", redirect, handleProtected);
// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
