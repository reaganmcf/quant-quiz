import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '../../theme';
import { Animated } from 'react-animated-css';
import { CustomLink } from '../CustomLink';

type Props = {
  link: React.ReactNode;
};

export const Button: React.FC<Props> = (props: Props) => {
  const Container = styled('div')`
    background-color: ${theme().primary};
    color: ${theme().text};
    border-radius: 1000px;
    padding: 10px 20px 10px 20px;
    max-width: 30%;
    margin: auto;
    text-align: center;
    justify-content: center;
    font-size: 32px;
  `;

  return <Container>{props.link}</Container>;
};
