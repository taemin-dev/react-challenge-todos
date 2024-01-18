const API_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  return await (await (await fetch(API_URL + "/coins")).json()).slice(0, 100);
}

export async function fetchCoinInfo(coinId: string) {
  return await (await fetch(API_URL + "/coins/" + coinId)).json();
}

export async function fetchCoinTickers(coinId: string) {
  return await (await fetch(API_URL + "/tickers/" + coinId)).json();
}

export async function fetchCoinHistory(coinId: string) {
  return await (
    await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
  ).json();
}
