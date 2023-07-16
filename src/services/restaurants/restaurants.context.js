import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.services";
import { Children } from "react/cjs/react.production.min";

export const RestaurantsConext = createContext();

export const RestaurantsConextProvider = (children) => {
  return (
    <RestaurantsConext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantsConext.Provider>
  );
};
