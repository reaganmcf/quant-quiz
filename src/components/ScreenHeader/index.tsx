import * as React from 'react';
import styled from '@emotion/styled';
import themes from '../../theme';
import { Animated, AnimationString } from 'react-animated-css';
import theme from '../../theme';

type Props = {
  children?: React.ReactNode;
  animationIn: AnimationString;
  animationOut: AnimationString;
  text: string;
};

export const ScreenHeader: React.FC<Props> = (props: Props) => {
  const Title = styled('div')`
    text-align: center;
    color: ${theme().primary};
    font-size: 60px;
    padding-top: 25px;
  `;
  return (
    // <Animated
    //   animationIn={props.animationIn}
    //   animationOut={props.animationOut}
    //   isVisible={true}
    // >
    <Title>
      <p>{props.text}</p>
    </Title>
    // </Animated>
  );
};
