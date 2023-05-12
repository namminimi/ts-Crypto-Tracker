
import React from 'react';
import { useQuery } from 'react-query';
import { fetchCoinTickers } from './api';
import { styled } from 'styled-components';

interface  PriceProps {
    coinId: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
        ath_date: string
        ath_price: number;
        market_cap: number;        
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
        };
    };
}

const PriceWrap = styled.div`
    margin-bottom: 15px;
`

const NowPrice = styled.div`   
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 10px 20px;
    border-radius: 10px;
    h3 {
        font-size: 13px;
        margin-bottom: 5px;
    }
    p {
        font-size: 15px;
    }
`
const PriceUl = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const PriceLi = styled.li`
    width: 48%;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 10px;
    &:nth-child(odd) {
        margin-right: 4%;
    }
    h3 {
        font-size: 13px;
        margin-bottom: 5px;
    }
    p {
        font-size: 15px;
    }
` 

const Price = ({coinId}: PriceProps) => {
    const {isLoading, data} = useQuery<PriceData>(["ticker", coinId], 
    ()=> fetchCoinTickers(coinId))

    return (
        <PriceWrap>{isLoading ? "Loading Price..." : 
            <>
            <NowPrice>
                <h3>Price:</h3>
                <p>{data?.quotes.USD.price}</p>
            </NowPrice>
            <PriceUl>
                <PriceLi>
                    <h3>15m</h3>
                    <p>{data?.quotes.USD.percent_change_15m}</p>
                </PriceLi>
                <PriceLi>
                    <h3>30m</h3>
                    <p>{data?.quotes.USD.percent_change_30m}</p>
                </PriceLi>
                <PriceLi>
                    <h3>1h</h3>
                    <p>{data?.quotes.USD.percent_change_1h}</p>
                </PriceLi>
                <PriceLi>
                    <h3>6h</h3>
                    <p>{data?.quotes.USD.percent_change_6h}</p>
                </PriceLi>
                <PriceLi>
                    <h3>12h</h3>
                    <p>{data?.quotes.USD.percent_change_12h}</p>
                </PriceLi>
                <PriceLi>
                    <h3>24h</h3>
                    <p>{data?.quotes.USD.percent_change_24h}</p>
                </PriceLi>
                <PriceLi>
                    <h3>7d</h3>
                    <p>{data?.quotes.USD.percent_change_7d}</p>
                </PriceLi>
                <PriceLi>
                    <h3>30d</h3>
                    <p>{data?.quotes.USD.percent_change_30d}</p>
                </PriceLi>
            </PriceUl></>}
        </PriceWrap>
    );
};

export default Price;