import React from 'react';
import classes from './Text.module.scss';

interface Props {
  label: string;
  placeholder: string;
  onChange: (newValue: string) => void;
}

export const TextInput = (props: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <label className={classes.input__label} htmlFor='input'>
        {props.label}:
      </label>
      <input
        className={classes.input}
        name='input'
        onChange={onChange}
        placeholder={props.placeholder}
        type='text'
      />
    </div>
  );
};
