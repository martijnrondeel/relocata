import React, { useState } from 'react';
import { Location } from 'history';

import classes from './Preferred.module.scss';
import { Page } from '../..';
import { CityInput } from '../../../Input/City';

interface Props {
  location: Location<{ name: string; currentLocation: string }>;
}

export const PreferredLocation = (props: Props) => {
  const { currentLocation } = props.location.state;

  const [locations, setLocations] = useState(['', '', ''] as string[]);

  const onChangeLocation = (input: string, index: number) => {
    const tmp = locations;
    tmp[index] = input;
    setLocations([...tmp]);
  };

  const multipleCityInput = () => {
    const inputs = [];

    for (let index = 0; index < 3; index++) {
      inputs.push(
        <CityInput
          key={index}
          label={(index + 1).toString()}
          onChange={(newValue) => onChangeLocation(newValue, index)}
          placeholder='Search for city'
          value={locations[index]}
        />,
      );
    }

    return inputs;
  };

  const content = <div className={classes.preferred}>{multipleCityInput()}</div>;

  return (
    <Page
      content={content}
      link={{
        url: '/advice',
        text: 'Get advice',
        state: { preferredLocations: locations, ...props.location.state },
      }}
      title={
        <>
          {currentLocation}, got it!
          <br />
          <br />
          Which cities are you considering?
        </>
      }
    />
  );
};
