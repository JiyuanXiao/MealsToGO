import camelize from "camelize";

export const locaitonRequest = (searchTerm) => {
  return fetch(
    `https://geocode-bs4dzalkaq-uc.a.run.app?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locaitonTRansform = (result) => {
  const formatedResponse = camelize(result);
  const { geometry = {} } = formatedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
