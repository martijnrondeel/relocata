import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Input/Button';

import classes from './Page.module.scss';

interface Props {
  title: ReactNode;
  description?: string;
  content?: ReactNode;
  link?: {
    url: string;
    text: string;
    state?: any;
  };
}

export const Page = (props: Props) => (
  <div className={classes.page}>
    <div className={classes.page__header}>
      <div className={classes.page__title}>{props.title}</div>
      {props.description ? (
        <p className={classes.page__description}>{props.description}</p>
      ) : null}
    </div>

    {props.content ? <div className={classes.page__content}>{props.content}</div> : null}

    {props.link ? (
      <div className={classes.page__actions}>
        <Link to={{ pathname: props.link.url, state: props.link.state }}>
          <Button text={props.link.text} />
        </Link>
      </div>
    ) : null}
  </div>
);
