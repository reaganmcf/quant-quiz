import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '../../theme';
import { Animated } from 'react-animated-css';
import { Button } from '../Button';
import { CustomLink } from '../CustomLink';
import { ScreenContainer } from '../SceneContainer';

export const LaunchScreen: React.FC = () => {
  const Title = styled('div')`
    text-align: center;
    color: ${theme().primary};
    font-size: 60px;
    padding-top: 25px;
  `;

  return (
    <ScreenContainer style={{ position: 'relative' }}>
      <Animated
        animationIn="bounceInDown"
        animationOut="bounceOutUp"
        isVisible={true}
      >
        <Title>
          <p>Quant Quiz</p>
        </Title>
      </Animated>
      <div style={{ position: 'absolute', bottom: '100px', width: '100%' }}>
        <Animated
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          isVisible={true}
        >
          <Button link={<CustomLink to="/game">Play Game</CustomLink>} />
        </Animated>
      </div>
    </ScreenContainer>
  );
};
