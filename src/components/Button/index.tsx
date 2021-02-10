import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '../../theme';
import { Animated } from 'react-animated-css';
import { CustomLink } from '../CustomLink';

type Props = {
  children?: React.ReactNode;
  link?: React.ReactNode;
  nolink?: boolean;
  text?: string;
  small?: boolean;
  backgroundColor?: string;
  style?: object;
  onClick?: () => void;
};

export const Button: React.FC<Props> = (props: Props) => {
  const Container = styled('div')`
    background-color: ${props.backgroundColor || theme().primary};
    color: ${theme().text};
    border-radius: 1000px;
    padding: 10px 20px 10px 20px;
    max-width: ${props.small ? '20%' : '40%'};
    margin: auto;
    text-align: center;
    justify-content: center;
    font-size: '32px';
  `;
  return (
    <Container onClick={props.onClick} style={props.style}>
      {props.nolink ? props.children : props.link}
    </Container>
  );
};
