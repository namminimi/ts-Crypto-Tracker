//react-query를 사용하기위해 만듬

const BASE_URL = `https://api.coinpaprika.com/v1`

/* https://cors-anywhere.herokuapp.com/ */ //cors에러 방지

export async function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((responese) => 
    responese.json())
}


export function fetchCoinInfo(coinId: string){
    return fetch(`${BASE_URL}/coins/${coinId}`).then((responese) => 
    responese.json())
}

export function fetchCoinTickers(coinId: string){
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((responese) => responese.json())
}

export function fetchCoinHistory(coinId: string) {
    /* const endDate = Math.floor(Date.now()/1000);
    const startDate = endDate - 60 * 60 * 24 * 7; */ //코인파프리카 유료로인해 생략
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then((responese) => responese.json())
}