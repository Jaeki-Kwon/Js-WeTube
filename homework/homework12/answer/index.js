const API_URL = "http://ip-api.com/json/";

const progress = document.querySelector(".progress");

progress.innerHTML = "Locating you.....";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const { city, country, timezone } = data;
    progress.innerHTML = `Found you at: ${city}, ${country}, ${timezone}!`;
  })
  .catch((e) => {
    console.log(e);
    progress.innerHTML = "Can't find you!";
  });
