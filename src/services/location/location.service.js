import camelize from "camelize";
import { locations } from "./location.mock";

export const locaitonRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) reject("not found");
    resolve(locationMock);
  });
};

export const locaitonTRansform = (result) => {
  const formatedResponse = camelize(result);
  const { geometry = {} } = formatedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
