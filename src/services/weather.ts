// NOTE: Preferably this would all live behind a server API with the API key stored in an environment variable
const API_KEY = 'redacted';

export const getWeatherLocationID = async (cityName: string, countryCode: string) => {
  const data = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/${countryCode}/search?apikey=${API_KEY}&q=${cityName}`,
  );

  const json = await data.json();
  return json[0].Key;
};

export const getCurrentWeather = async (weatherLocationID: string) => {
  const data = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${weatherLocationID}?apikey=${API_KEY}`,
  );

  return data.json();
};
