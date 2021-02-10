import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '../../theme';
import { Animated } from 'react-animated-css';
import { Button } from './../../components/Button';
import { CustomLink } from './../../components/CustomLink';
import { ScreenContainer } from './../../components/SceneContainer';
import { ScreenHeader } from '../../components/ScreenHeader';

export const LaunchScreen: React.FC = () => {
  return (
    <ScreenContainer style={{ position: 'relative' }}>
      <ScreenHeader
        text="Quant Quiz"
        animationIn="bounceInDown"
        animationOut="bounceOutUp"
      />

      <div style={{ position: 'absolute', bottom: '200px', width: '100%' }}>
        <Animated
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          isVisible={true}
        >
          <Button link={<CustomLink to="/game">Play Game</CustomLink>} />
        </Animated>
      </div>
      <div style={{ position: 'absolute', bottom: '100px', width: '100%' }}>
        <Animated
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          isVisible={true}
        >
          <Button
            small
            link={<CustomLink to="/leaderboard">Leaderboard</CustomLink>}
          />
        </Animated>
      </div>
    </ScreenContainer>
  );
};
