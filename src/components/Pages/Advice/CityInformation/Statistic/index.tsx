import React from 'react';

import classes from './Statistic.module.scss';

interface Props {
  label: string;
  value: string;
}

export const Statistic = (props: Props) => (
  <div className={classes.statistic}>
    <span className={classes.statistic__label}>{props.label}</span>
    <span className={classes.statistic__value}>{props.value}</span>
  </div>
);
