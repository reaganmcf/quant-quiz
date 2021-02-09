import * as React from 'react';
import { ScreenContainer } from '../../components/SceneContainer';
import { ScreenHeader } from '../../components/ScreenHeader';

type Props = {};

export const LeaderboardScreen: React.FC<Props> = (props: Props) => {
  return (
    <ScreenContainer>
      <ScreenHeader
        text="Leaderboard"
        animationIn="bounceInDown"
        animationOut="bounceOutUp"
      />
    </ScreenContainer>
  );
};
