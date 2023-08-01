import React, { useState, createContext } from "react";
import { locaitonRequest, locaitonTRansform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextSProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    console.log(searchKeyword);
    if (!searchKeyword) {
      return;
    }
    locaitonRequest(searchKeyword.toLowerCase())
      .then(locaitonTRansform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
