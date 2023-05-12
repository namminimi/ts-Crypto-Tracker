import { useQuery } from 'react-query';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { fetchCoins } from './api';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`

const Header = styled.header`
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`

const CoinsList = styled.ul``

const Coin = styled.li`
    background-color: ${props => props.theme.textColor};;
    color: ${props => props.theme.bgColor};
    
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        transition:  color 0.2s ease-in;
        display: flex;
        align-items: center;
        padding: 20px;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor}
        }
    }
`

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`
const Loader = styled.span`
    text-align: center;
    display: block;
`

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

const Coins = () => {
    const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins) //return으로 받은 json을 data로
    //뒤로가기 눌렀을때 로딩 안걸리는 이유는 캐쉬에 저장되있기때문(데이터 유지)
    /* const [coins, setCoins] = useState<CoinInterface[]>([]) //react-query를 사용하므로 생략
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async() => {
            const responese = await fetch("https://api.coinpaprika.com/v1/coins")
            const json = await responese.json();
            setCoins(json.slice(0,100))
            setLoading(false)
        })();
    },[])
    console.log(coins) */
    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? <Loader>Loading...</Loader> : <CoinsList>
                {data?.slice(0,20).map(coin => <Coin key={coin.id}>
                    <Link to={`/${coin.id}`} state= {{name: coin.name}}>
                        <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="" />
                        {coin.name} &rarr;
                    </Link>
                </Coin>)}
            </CoinsList>}
        </Container>
        
    );
};

export default Coins;