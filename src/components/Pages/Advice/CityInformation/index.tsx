import React, { useEffect, useState } from 'react';

import classes from './CityInformation.module.scss';
import { Statistic } from './Statistic';
// import { getWeatherLocationID, getCurrentWeather } from '../../../../services/weather';
import { getCheapestFlight } from '../../../../services/flights';

interface Props {
  city: KiwiLocation;
  preferred: boolean;
}

export const CityInformation = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [flightInformation, setFlightInformation] = useState(null as any);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      /* const response = await getWeatherLocationID(
        props.city.name,
        props.city.country.code,
      );
      const weather = await getCurrentWeather(response);*/

      const flights = await getCheapestFlight('AMS', props.city.code, new Date());

      if (flights.data.length > 0) {
        setFlightInformation(flights.data[0]);
      }

      setIsLoading(false);
    };

    fetch();
  }, [props.city.name, props.city.country.code, props.city.code]);

  return (
    <div
      className={`${classes.cityinformation} ${
        props.preferred ? classes.cityinformation__preferred : ''
      }`}>
      <h1>{props.city.name}</h1>
      <div>
        <h4>Flight information</h4>
        {flightInformation ? (
          <>
            {flightInformation?.conversion?.EUR ? (
              <Statistic
                label='Cost'
                value={`${flightInformation.conversion.EUR} Euros`}
              />
            ) : null}
            {flightInformation?.fly_duration ? (
              <Statistic label='Flight duration' value={flightInformation.fly_duration} />
            ) : null}
            {flightInformation?.deep_link ? (
              <a
                className={classes.cityinformation__flightlink}
                href={flightInformation.deep_link}
                rel='noopener noreferrer'
                target='_blank'>
                View flight info here
              </a>
            ) : null}
          </>
        ) : isLoading ? (
          <span>Loading...</span>
        ) : (
          <span>No flight information currently available</span>
        )}

        <h4>City information</h4>
        {props.city.population ? (
          <Statistic label='Population' value={props.city.population.toLocaleString()} />
        ) : null}
        {props.city.airports ? (
          <Statistic label='Airports' value={props.city.airports.toString()} />
        ) : null}
        {props.city.bus_stations ? (
          <Statistic label='Bus stations' value={props.city.bus_stations.toString()} />
        ) : null}
        {props.city.stations ? (
          <Statistic label='Train stations' value={props.city.stations.toString()} />
        ) : null}
        {props.city.hotels ? (
          <Statistic label='Hotels' value={props.city.hotels.toString()} />
        ) : null}
        <h4>Current weather</h4>
        <span>No weather information currently available</span>
      </div>
    </div>
  );
};
