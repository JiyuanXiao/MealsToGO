import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsConextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextSProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextSProvider>
            <RestaurantsConextProvider>
              <Navigation />
            </RestaurantsConextProvider>
          </LocationContextSProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
