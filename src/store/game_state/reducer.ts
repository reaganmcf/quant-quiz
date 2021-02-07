import { Reducer } from 'redux'
import { Action, actionTypes } from './actions'
import { IGameState } from './types'

export const defaultGameState: IGameState = {
    currentData: {
        ticker: '',
        data: []
    },
    streak: 0
}

const gameStateReducer: Reducer<IGameState> = (state: IGameState = defaultGameState, action: Action) => {
    switch(action.type) {
        case actionTypes.GET_GAME_STATE:
            return state;
        case actionTypes.LOAD_RANDOM_STOCK_DATA:
            return {
                ...state,
                currentData: action.payload
            }
        case actionTypes.CLEAR_CURRENT_STOCK_DATA:
            return {
                ...state,
                currentData: undefined
            }
        case actionTypes.INCREMENT_STREAK:
            return {
                ...state,
                streak: state.streak + 1
            }
        default:
            return state
    }
}

export default gameStateReducer