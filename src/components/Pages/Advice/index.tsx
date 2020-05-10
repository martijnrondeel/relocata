import React, { useEffect, useState } from 'react';
import { Location } from 'history';

import classes from './Advice.module.scss';
import { Page } from '../';
import { CityInformation } from './CityInformation';
import { getLocationByString } from '../../../services/locations';

interface Props {
  location: Location<{
    name: string;
    currentLocation: string;
    preferredLocations: string[];
  }>;
}

export const Advice = (props: Props) => {
  const [cityInformation, setCityInformation] = useState([] as KiwiLocation[]);

  useEffect(() => {
    const fetchCityInformation = async () => {
      const information = props.location.state.preferredLocations.map(async (cityName) =>
        getLocationByString(cityName),
      );

      const data = await Promise.all(information);
      setCityInformation(data.map((location) => location.locations[0]));
    };

    fetchCityInformation();
  }, [props.location.state.preferredLocations]);

  const content = (
    <div className={classes.advice}>
      {cityInformation.map((city, index) => (
        <CityInformation
          city={city}
          key={city.name}
          preferred={index === 0 ? true : false}
        />
      ))}
    </div>
  );

  return (
    <Page
      content={content}
      title={<>Here is your advice {props.location.state.name}</>}
    />
  );
};
