export const getLocationByString = async (
  input: string,
): Promise<{ locations: KiwiLocation[] }> => {
  const data = await fetch(
    `https://api.skypicker.com/locations?term=${input}&locale=en-US&location_types=city&limit=5&active_only=true&sort=name`,
  );

  return data.json();
};

export const getLocationByCoords = async (
  position: Position,
): Promise<{ locations: KiwiLocation[] }> => {
  const data = await fetch(
    `https://api.skypicker.com/locations?type=radius&lat=${position.coords.latitude}&lon=${position.coords.longitude}&radius=10&locale=en-US&location_types=city&limit=5&active_only=true&sort=rank`,
  );

  return data.json();
};
