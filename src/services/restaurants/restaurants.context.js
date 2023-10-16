import React, { useState, createContext, useEffect, useContext } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.services";
import { LocationContext } from "../location/location.context";

export const RestaurantsConext = createContext();

export const RestaurantsConextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((result) => {
        setRestaurants(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsConext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsConext.Provider>
  );
};
