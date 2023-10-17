import camelize from "camelize";
import { isMock } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(
    `https://placenearby-bs4dzalkaq-uc.a.run.app?location=${location}&mock=${isMock}`
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
