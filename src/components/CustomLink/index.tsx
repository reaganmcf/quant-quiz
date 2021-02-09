import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  children?: any;
};

export const CustomLink = (props: Props) => {
  return (
    <Link to={props.to} style={{ color: 'inherit', textDecoration: 'none' }}>
      {props.children}
    </Link>
  );
};
