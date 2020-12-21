const apiText = document.getElementById("apiText");
const apiCountry = document.getElementById("apiCountry");
const apiCity = document.getElementById("apiCity");

const API_URL = "http://ip-api.com/json/";

apiText.innerHTML = "Locating you.....";

const register = () => {
  fetch(API_URL)
    .then((res) => {
      if (res.status !== 200) {
        console.log(`Error${res.status}`);
      }
      res.json().then((data) => {
        console.log(data);
        const stringData = JSON.stringify(data);
        console.log(stringData);
        const country = stringData.split(",")[1];
        const city = stringData.split(",")[5];
        console.log(country, city);
        apiText.innerHTML = stringData;
        apiCountry.innerHTML = country;
        apiCity.innerHTML = city;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

window.addEventListener("DOMContentLoaded", register);
