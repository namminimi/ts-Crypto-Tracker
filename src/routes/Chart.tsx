
import { useQuery } from 'react-query';
import React from 'react';
import { fetchCoinHistory } from './api';
import ApexChart from 'react-apexcharts';

interface IHistorical{
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

interface  CharProps {
    coinId: string;
    isDark: boolean
}

const Chart = ({coinId, isDark}: CharProps) => {
    const {isLoading, data} = useQuery<IHistorical[]>(
        ["ohlcv", coinId], 
        ()=> fetchCoinHistory(coinId),{refetchInterval: 10000,})
    //console.log(data?.map((price) => parseFloat(price.close))!)
    const series = [
        {
            data: data?.map((price) => ({
                x: new Date(price.time_open),
                y: [price.open, price.high, price.low, price.close],
            }))
        }
    ]
    return (
        <div>{isLoading ? "Loading chart..." : <ApexChart
        type='candlestick'
        series = {series as unknown as number[]}
        options={{
            theme: {
                mode: isDark ? 'light' : 'dark'
            },
            chart: {
                type: 'candlestick',
                height: 300,
                width: 500,
                toolbar: {
                    show:false,
                },
                background: 'transparent',
            },
            grid: {show: false},
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                tooltip: {
                    enabled: true,
                },
            },
            tooltip: {
                y: {
                    formatter: (value) => `$${value.toFixed(2)}`
                }
            }
        }}
        />}</div>
    );
};

//라인형태 차트
{/* <ApexChart 
        type="line" 
        series={[
            {
                name: "price",
                data: data?.map((price) => parseFloat(price.close))!
            }
        ]}
        options={{
            theme:{
                mode:"dark"
            },
            chart: {
                height: 500,
                width: 500,
                background: "transparent",
                toolbar: {
                    show: false
                }
            },
            grid: {
                show: false
            },
            stroke: {
                curve: "smooth",
                width: 4,
            },
            yaxis: {
                show: false,
            },
            xaxis: {
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: true
                },
                labels: {
                    show: false,
                },
                type:"datetime",
                categories: data?.map(price => new Date(price.time_close * 1000).toISOString())
            },
            fill: {
                type: "gradient",
                gradient: {
                    gradientToColors: ["#0be881"],
                    stops: [0,100]
                }
            },
            colors: ["#0fbcf9"],
            tooltip: {
                y: {
                    formatter: (value) => `$${value.toFixed(2)}`
                }
            }
        }}/> */}
export default Chart;