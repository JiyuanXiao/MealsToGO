import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `https://placenearby-bs4dzalkaq-uc.a.run.app?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED-TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResult);
};
