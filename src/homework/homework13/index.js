const API_URL = "https://api.coinpaprika.com/v1/tickers";

const progress = document.querySelector(".progress");
const coinsList = document.querySelector(".coinsList");

progress.innerHTML = "Getting coin prices...";

const paintCoin = (coin) => {
  const {
    name,
    quotes: {
      USD: { price },
    },
  } = coin;
  const li = document.createElement("li");
  li.innerHTML = `${name} / $${price}`;
  coinsList.appendChild(li);
};

const paintCoins = (coins) => {
  // Dont forget to empty the list first!
  coinsList.innerHTML = "";
  coins.forEach((coin) => paintCoin(coin));
};

const getPrices = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      progress.innerHTML = "";
      paintCoins(data);
    })
    .catch((e) => console.log(e));
};

getPrices();
setInterval(getPrices, 5000);
