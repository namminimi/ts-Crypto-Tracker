import React from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';
import Price from './routes/Price';
import Chart from './routes/Chart';

type RouterType = {
    isDark: boolean
}

const Router = ({isDark}:RouterType) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Coins/>}/>
                <Route path='/:coinId/*' element={<Coin isDark={isDark}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;