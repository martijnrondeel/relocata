import React, { useState } from 'react';
import { Location } from 'history';

import classes from './Current.module.scss';
import { Page } from '../..';
import { CityInput } from '../../../Input/City';
import { Button } from '../../../Input/Button';
import { getLocationByCoords } from '../../../../services/locations';

interface Props {
  location: Location<{ name: string }>;
}

export const CurrentLocation = (props: Props) => {
  const { name } = props.location.state;

  const [location, setLocation] = useState('');

  const onChangeLocation = (input: string) => {
    setLocation(input);
  };

  const content = (
    <div className={classes.current}>
      <Button
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => {
          navigator.geolocation.getCurrentPosition((position) => {
            getLocationByCoords(position).then((response) => {
              setLocation(response.locations[0].name);
            });
          });
        }}
        text='Get current location'
      />
      <span className={classes.current__divider}>Or</span>
      <CityInput
        label='Search for location'
        onChange={onChangeLocation}
        placeholder='Type a city name'
        value={location}
      />
    </div>
  );

  return (
    <Page
      content={content}
      link={{
        url: '/preferred-location',
        text: 'Continue',
        state: { currentLocation: location, ...props.location.state },
      }}
      title={
        <>
          <span className={classes.current__welcome}>
            <span aria-label='hello' className={classes.current__hello} role='img'>
              👋
            </span>{' '}
            Hi {name}!
          </span>
          <br />
          <br />
          What is your current location?
        </>
      }
    />
  );
};
