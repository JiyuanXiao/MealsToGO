import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.services";

export const RestaurantsConext = createContext();

export const RestaurantsConextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((result) => {
          setRestaurants(result);
        })
        .catch((err) => {
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsConext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsConext.Provider>
  );
};
