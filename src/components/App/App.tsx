import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux'
import { IAppState } from '../../store';
import { IGameState } from '../../store/game_state/types';
import './App.css';

type Props = {
  // gameState: IGameState
}

export const App: React.FC<Props> = () => {
  const gameState: IGameState = useSelector(
    (state: IAppState) => state.gameState 
  )

  console.log(gameState)

  return (
    <div className="App">
      <header>
        <p>Current Score:{gameState.streak}</p>
      </header>
    </div>
  )
}
export default App;
