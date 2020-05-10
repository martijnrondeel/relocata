import React, { useState } from 'react';

import { TextInput } from '../../Input/Text';
import { Page } from '..';
import { UppercaseFirstLetter } from '../../../lib/stringtools';

export const Name = () => {
  const [name, setName] = useState('');

  const onChangeName = (input: string) => {
    setName(UppercaseFirstLetter(input));
  };

  const content = (
    <TextInput label='Name' onChange={onChangeName} placeholder='First name' />
  );

  return (
    <Page
      content={content}
      link={{ url: '/current-location', text: 'Continue', state: { name } }}
      title='What is your name?'
    />
  );
};
