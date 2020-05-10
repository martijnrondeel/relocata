import React from 'react';
import classes from './Button.module.scss';

interface Props {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = (props: Props) => (
  <button className={classes.button} onClick={props.onClick} type='button'>
    {props.text}
  </button>
);
