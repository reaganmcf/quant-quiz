// @ts-nocheck
import styled from '@emotion/styled/'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux'
import { IAppState } from '../../store';
import { IGameState } from '../../store/game_state/types';
import './App.css';
import theme from './../../theme'

const Wrapper = styled("div")`
  background-color: ${() => theme().background};
  text-align: center;
  /* background-color: gray; */
  min-height: 90vh;
  width: 500px;
  border-radius: 10px;
  box-shadow: #bbbbbb 10px 10px 10px;
`

export const App: React.FC<Props> = () => {

  const gameState: IGameState = useSelector(
    (state: IAppState) => state.gameState 
  )

  console.log(gameState)

  return (
    <Wrapper>
      <div style={{backgroundColor: theme().background}}>
        <header>
          <p>Current Score:{gameState.streak}</p>
        </header>
      </div>
    </Wrapper>
  )
}
export default App;
