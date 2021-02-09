import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LaunchScreen } from './../LaunchScreen';
import { GameScreen } from './../GameScreen';
import { ScreenContainer } from '../../components/SceneContainer';
import { LeaderboardScreen } from '../LeaderboardScreen';

export const App: React.FC = () => {
  return (
    <ScreenContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LaunchScreen} />
          <Route path="/game" component={GameScreen} />
          <Route path="/leaderboard" component={LeaderboardScreen} />
        </Switch>
      </BrowserRouter>
    </ScreenContainer>
  );
};

export default App;
