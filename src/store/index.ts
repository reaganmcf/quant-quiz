import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { IGameState } from './game_state/types'
import gameStateReducer from './game_state/reducer'
        
export interface IAppState {
    gameState: IGameState
}

const rootStore = combineReducers({
    gameState: gameStateReducer
})

export function createAppStore(): Store<IAppState> {
    return applyMiddleware(thunk, logger)(createStore)(rootStore)
}