const API_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(API_URL + "/coins")
    .then((response) => response.json())
    .then((json) => json.slice(0, 100));
}

export function fetchCoinInfo(coinId: string) {
  return fetch(API_URL + "/coins/" + coinId).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(API_URL + "/tickers/" + coinId).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
