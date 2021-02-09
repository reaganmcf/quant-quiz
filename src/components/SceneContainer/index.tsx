import * as React from 'react';
import styled from '@emotion/styled';
import themes from '../../theme';

type Props = {
  children?: React.ReactNode;
  style?: object;
};

export const ScreenContainer: React.FC<Props> = (props: Props) => {
  const Screen = styled('div')`
    background-color: ${themes().canvas_background};
    height: 90vh;
    width: 500px;
    color: ${themes().primary};
    border-radius: 15px;
  `;
  return <Screen style={props.style}>{props.children}</Screen>;
};
