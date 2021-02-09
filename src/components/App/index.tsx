import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IAppState } from '../../store';
import { IGameState } from '../../store/game_state/types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LaunchScreen } from './../LaunchScreen';
import { GameScreen } from './../GameScreen';
import { ScreenContainer } from '../SceneContainer';

export const App: React.FC = () => {
  const gameState: IGameState = useSelector(
    (state: IAppState) => state.gameState
  );

  return (
    <ScreenContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LaunchScreen} />
          <Route path="/game" component={GameScreen} />
        </Switch>
      </BrowserRouter>
    </ScreenContainer>
  );
};

export default App;
