import { IGameState, IStockData } from './types'
import { fetchRandomStockData } from '../../services/api'

export enum actionTypes {
    LOAD_RANDOM_STOCK_DATA = 'LOAD_RANDOM_STOCK_DATA',
    CLEAR_CURRENT_STOCK_DATA = 'CLEAR_CURRENT_STOCK_DATA',
    INCREMENT_STREAK = 'INCREMENT_STREAK',
    GET_GAME_STATE = 'GET_GAME_STATE'
}

interface ILoadRandomStockDataAction {
    payload: IStockData,
    type: typeof actionTypes.LOAD_RANDOM_STOCK_DATA
}

interface IClearStockDataAction {
    type: typeof actionTypes.CLEAR_CURRENT_STOCK_DATA
}

interface IIncrementStreakAction {
    type: typeof actionTypes.INCREMENT_STREAK
}

interface IGetGameStateAction {
    type: typeof actionTypes.GET_GAME_STATE
}

export type Action = 
    | ILoadRandomStockDataAction
    | IClearStockDataAction
    | IIncrementStreakAction
    | IGetGameStateAction

type PromiseAction = Promise<Action>
type ThunkAction = (dispatch: Dispatch) => any
type Dispatch = (action: Action | ThunkAction | PromiseAction) => any

// Action Creators
function createLoadRandomStockDataAction(stockData: IStockData): ILoadRandomStockDataAction {
    return {
        payload: stockData,
        type: actionTypes.LOAD_RANDOM_STOCK_DATA
    }
}

export function incrementStreak(): Action {
    return {
        type: actionTypes.INCREMENT_STREAK
    }
}

export function clearCurrentStockData(): Action {
    return {
        type: actionTypes.CLEAR_CURRENT_STOCK_DATA
    }
}

export function getGameState(): Action {
    return {
        type: actionTypes.GET_GAME_STATE
    }
}

// Thunk Actions
export function getRandomStockData(): ThunkAction {
    return (dispatch: Dispatch) => {
        fetchRandomStockData().then((stockData: IStockData) => {
            dispatch(createLoadRandomStockDataAction(stockData))
        })
    }
}