export const getCheapestFlight = async (
  from: string,
  to: string,
  date: Date,
): Promise<any> => {
  const dateFrom = `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`;

  // We look 3 months into the future when we try to get possible flights
  const dateTo = `${date.getUTCDate()}/${
    date.getUTCMonth() + 3
  }/${date.getUTCFullYear()}`;

  const data = await fetch(
    `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=picky&v=3`,
  );

  return data.json();
};
