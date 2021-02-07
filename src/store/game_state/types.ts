import { Action } from 'redux';

export interface ICandleEntry {
    open: number;
    high: number;
    low: number;
    last: number;
    close: number;
    volume: number;
    date: Date;
    symbol: string;
    exchange: string;
}

export interface IRawStockData {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    },
    data: Array<ICandleEntry>
}

export interface IStockData {
    ticker: string;
    data: Array<ICandleEntry>;
}

export interface IGameState {
    streak: number;
    currentData?: IStockData;
}
